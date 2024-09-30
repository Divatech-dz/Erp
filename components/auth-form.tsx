'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Loader2 } from 'lucide-react';
import { Form } from '@/components/ui/form';

import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { authFormSchema } from '@/lib/utils';
import CustomInput from './custom-input';
import { Button } from './ui/button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

const AuthForm = ({ type }: { type: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = authFormSchema(type);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
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
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="DivaTech logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            DivaTech
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            Sign In
            <p className="text-16 font-normal text-gray-600">
              Fill it up to get started
            </p>
          </h1>
        </div>
      </header>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomInput
            control={form.control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />

          <CustomInput
            control={form.control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <div className="flex gap-1 flex-col">
            <Button type="submit" disabled={isLoading} className="form-btn">
              {isLoading ? (
                <>
                  <Loader2 size={20} className="animate-spin" /> &nbsp;
                  Loading...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default AuthForm;
