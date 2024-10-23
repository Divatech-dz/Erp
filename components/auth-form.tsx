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

export const AuthForm = ({ type }: Readonly<{ type: string }>) => {
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
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            Se connecter
            <p className="text-16 font-normal text-gray-600">
              Connectez-vous pour accéder à votre compte
            </p>
          </h1>
        </div>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomInput
            control={form.control}
            name="username"
            label="Nom d'utilisateur"
            placeholder="Veuillez entrer votre nom d'utilisateur"
          />
          <div className="relative">
            <CustomInput
              control={form.control}
              name="password"
              label="Mot de passe"
              placeholder="Veuillez entrer votre mot de passe"
              type={show ? 'text' : 'password'}
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
              ) : (
                'Se connecter'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};
