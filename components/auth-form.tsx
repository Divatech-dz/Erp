'use client';

import Image from 'next/image';
import { Loader2 } from 'lucide-react';
import { Form } from '@/components/ui/form';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';

import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { icons } from '@/constants/icons';
import { CustomInput } from './custom-input';
import { AuthType } from '@/constants';
import { Dropdown } from './table-components/drop-down';




export const AuthForm = ({ type, height }: Readonly<{ type: string, height?: string }>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);

  const showPassword = show ? icons.openedEye : icons.closedEye;

  const formSchema = authFormSchema(type);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = () => {
    setIsLoading(true);
    router.push('/');
  };

  return (
    <section className={`auth-form ${height}`}>
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {type == AuthType.SignUp ? "Ajouter un utilisateur" : "Se connecter"}
            <p className="text-16 font-normal text-gray-600">
              {type == AuthType.SignUp ? "" : "Connectez-vous pour accéder à votre compte"}
            </p>
          </h1>
        </div>
      </header>

      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {type === 'sign-up' && (
            <>

              <div className="flex gap-4">
                <CustomInput control={form.control} name='firstName' label="Nom Complet" placeholder='Enter Nom et Prenom' date1={true} />
                <CustomInput control={form.control} name='الإسم الكامل' label="الإسم الكامل" date1={true} placeholder='لإسم الكامل' />
              </div>

              <div className="flex gap-4">
                <CustomInput control={form.control} name='Fonction' label="Fonction" placeholder='Enter Fonction' date1={true} />
                <CustomInput control={form.control} name="الوظيفة" label="الوظيفة" placeholder="الوظيفة" date1={true} />
              </div>
              <CustomInput
                control={form.control}
                name="Matricule de Declaration"
                label="Matricule de Declaration"
                placeholder="Enter Matricule de Declaration"
                date1={true}
              />

              <div className="flex gap-4">
                <CustomInput control={form.control} name='Date de Début' label="Date de Début" date1={false} />
                <CustomInput control={form.control} name="Lieu de Naissance" label="Lieu de Naissance" placeholder="Lieu de Naissance" date1={true} />
                <CustomInput control={form.control} name="مكان الميلاد" label="مكان الميلاد" placeholder="مكان الميلاد" date1={true} />
              </div>



              <CustomInput control={form.control} name="Coût Horaire" label="Coût Horaire" placeholder="Coût Horaire" date1={true} />
              <div className='flex gap-4'>
                <CustomInput control={form.control} name='Date de Naissance' label="Date de Naissance" date1={false} />
                <CustomInput control={form.control} name="Date de Fin" label="Date de Fin" placeholder="Date de Fin" date1={false} />


              </div>
              <div className='flex gap-4'>

                <CustomInput control={form.control} name="Salaire" label="Salaire" placeholder="Salaire" date1={true} />
                <CustomInput control={form.control} name="Prime Panier + Transport" label="Prime Panier + Transport" placeholder="Prime Panier + Transport" date1={true} />
              </div>

              <CustomInput control={form.control} name="Echellon" label="Echellon" placeholder="Echellon" date1={true} />
              <div className='flex gap-4'>
                <Dropdown
                  label="Status"
                  icon={icons.ArrowDown}
                  columns={[{ id: '1', name: 'banque' }, { id: '2', name: 'CPP' }]}


                  classNameTrigger="px-4 py-2 w-full md:w-1/2 text-gray-700 font-medium bg-gray-50 hover:bg-gray-200 active:bg-gray-300 outline-none shadow-md transition-all"
                />

                <CustomInput control={form.control} name="Prime Panier + Transport" label="Prime Panier + Transport" placeholder="Prime Panier + Transport" date1={true} />
              </div>
              <CustomInput control={form.control} name="Numéro d'assurance Sociale" label="Numéro d'assurance Sociale" placeholder="Numéro d'assurance Sociale" date1={true} />





            </>

          )}
          <CustomInput
            control={form.control}
            name="username"
            label="Nom d'utilisateur"
            placeholder="Veuillez entrer votre nom d'utilisateur"
            date1={true}
          />
          <div className="relative">
            <CustomInput
              control={form.control}
              name="password"
              label="Mot de passe"
              placeholder="Veuillez entrer votre mot de passe"
              type={show ? 'text' : 'password'}
              date1={true}
            />
            <button
              type="button"
              title="Unlock"
              onClick={() => setShow(!show)}
              className="absolute left-96 -top-2 -bottom-8"
            >
              <Image src={showPassword} alt="unlock" width={24} height={24} />
            </button>
          </div>
          <div className="flex gap-1 flex-col">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : type === 'sign-up' ? 'Next' : 'Se connecter'}
            </Button>

          </div>
        </form>
      </Form>
    </section>
  );
};
