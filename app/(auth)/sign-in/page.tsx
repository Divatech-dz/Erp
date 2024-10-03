import { AuthForm } from '@/components/auth-form';
import { AuthType } from '@/constants';
import React from 'react';

export default function SignIn() {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AuthType.SignIn} />
    </section>
  );
}
