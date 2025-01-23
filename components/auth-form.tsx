'use client';

import React, {useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FieldPath, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';

import { authFormSchemaSignIn, authFormSchemaSignUp } from '@/lib/utils';
import { Form } from '@/components/ui/form';
import { Button } from './ui/button';
import { CustomInput } from './custom-input';
import { Dropdown } from './table-components/drop-down';
import { AuthType, status } from '@/constants';
import { icons } from '@/constants/icons';
import { LoginPayload, useLogin,  } from '@/service/userService';

export const AuthForm = ({ type, style,defaultValues }: Readonly<{ type: string; style?: string,defaultValues: Record<string, any> }>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const loginMutation = useLogin();
  const formSchema = type === AuthType.SignIn?authFormSchemaSignIn():authFormSchemaSignUp();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:defaultValues});

  const togglePasswordVisibility = () => setShow((prev) => !prev);

  const onSubmit = async(data:LoginPayload|any) => {
    try {
    await loginMutation.mutateAsync({ username:data.username,password:data.password });
    setIsLoading(true);
    router.push(type === AuthType.SignUp ? 'permission-user' : '/');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Invalid credentials');
    }
  };

  const renderCustomInput = (name: FieldPath<z.infer<typeof formSchema>>, label: string, placeholder?: string, isTextInput = true, type = 'text') => (
    <CustomInput<typeof formSchema>
      control={form.control}
      name={name}
      label={label}
      placeholder={placeholder}
      isTextInput={isTextInput}
      type={type}
    />
  );
  function getButtonText(isLoading: boolean, type: string): React.ReactNode {
    if (isLoading) {
      return (
        <>
          <Loader2 size={20} className="animate-spin" /> &nbsp;Loading...
        </>
      );
    }
    return type === AuthType.SignUp ? 'Next' : 'Se connecter';
  }

  return (
    <section className={`py-1 auth-form ${style}`}>
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {type === AuthType.SignUp ? 'Ajouter un utilisateur' : 'Se connecter'}
          </h1>
          {type === AuthType.SignIn && (
            <p className="text-16 font-normal text-gray-600">
              Connectez-vous pour accéder à votre compte
            </p>
          )}
        </div>
      </header>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {type === AuthType.SignUp && (
            <>
              <div className="flex gap-4">
                {renderCustomInput('firstName', 'Nom Complet', 'Enter Nom et Prenom')}
                {renderCustomInput('firstNameArabic', 'الإسم الكامل', 'لإسم الكامل')}
              </div>

              <div className="flex gap-4">
                {renderCustomInput('Function', 'Fonction', 'Enter Fonction')}
                {renderCustomInput('FunctionArabic', 'الوظيفة', 'الوظيفة')}
              </div>

              {renderCustomInput('MatriculeDeclaration', 'Matricule de Declaration', 'Enter Matricule de Declaration')}

              <div className="flex gap-4">
                {renderCustomInput('DateOfBirth', 'Date de Naissance', '', false,'date')}
                {renderCustomInput('placeOfBirth', 'Lieu de Naissance', 'Lieu de Naissance')}
                {renderCustomInput('placeOfBirthArabic', 'مكان الميلاد', 'مكان الميلاد')}
              </div>

              {renderCustomInput('HourlyCost', 'Coût Horaire', 'Coût Horaire',true,'number')}

              <div className="flex gap-4">
                {renderCustomInput('startDate', 'Date de Début', undefined, false,'date')}
                {renderCustomInput('endDate', 'Date de Fin', 'Date de Fin', false)}
              </div>

              <div className="flex gap-4">
                {renderCustomInput('Salary', 'Salaire', 'Salaire',true,'number')}
                {renderCustomInput('PrimePanierTransport', 'Prime Panier + Transport', 'Prime Panier + Transport',true,'number')}
              </div>

              {renderCustomInput('Echelon', 'Echellon', 'Echellon',true,'number')}

              <div className="flex items-end gap-4">
                  <Dropdown
                      label="Status"
                      icon={icons.ArrowDown}
                      columns={status}
                      showLabel={true}
                      classNameTrigger="mb-1 px-4 h-8 md:w-1/2 text-gray-700 font-medium bg-gray-50 hover:bg-gray-200 active:bg-gray-300 outline-none shadow-md transition-all"
                  />
                {renderCustomInput('CountNumber', 'Numéro de Compte', 'Numéro de Compte', true, 'number')}
              </div>

              {renderCustomInput('SocialInsuranceNumber', 'Numéro d\'assurance Sociale', 'Numéro d\'assurance Sociale', true, 'number')}
            </>
          )}

          {type === AuthType.SignIn && (
              <>
                {renderCustomInput('username', "Nom d'utilisateur", "Veuillez entrer votre nom d'utilisateur")}
              <div className="relative">
                {renderCustomInput('password', 'Mot de passe', 'Veuillez entrer votre mot de passe', true, show ? 'text' : 'password')}
                <button
                  type="button"
                  title="Unlock"
                  onClick={togglePasswordVisibility}
                  className="absolute left-96 -top-2 -bottom-8"
                >
                  <Image src={show ? icons.show : icons.hide} alt="unlock" width={24} height={24} />
                </button>
              </div>
            </>
          )}

          <div className="flex flex-col gap-1">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {getButtonText(isLoading, type)}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
