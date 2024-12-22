'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { billFormSchema } from '@/lib/utils';
import { Form } from '@/components/ui/form';
import { CustomInput } from '../custom-input';

interface BillFormProps {
  defaultValues: Record<string, string | number | Date>;
}

export const BillForm = ({ defaultValues }: BillFormProps) => {
  const formSchema = billFormSchema();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });
  return (
    <>
      <header className="flex flex-col gap-5 md:gap-8">
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            Bone de Livraison
          </h1>
        </div>
      </header>
      <Form {...form}>
        <form className="space-y-8 size-fit mb-7 mt-4">
          <CustomInput<typeof formSchema>
            control={form.control}
            name={'orderNumber'}
            label={'Numéro de Bon'}
            placeholder={'Numéro de Bon'}
            isTextInput={true}
            type={'text'}
          />
          <CustomInput<typeof formSchema>
            control={form.control}
            name={'orderDate'}
            label={'Date de Bon'}
            placeholder={'Date de Bon'}
            isTextInput={false}
            type={'text'}
          />
          <CustomInput<typeof formSchema>
            control={form.control}
            name={'AssociatedPurchaseOrder'}
            label={'Bon Commande Associé'}
            placeholder={'Bon Commande Associé'}
            isTextInput={true}
            type={'text'}
          />
          <CustomInput<typeof formSchema>
            control={form.control}
            name={'warehouse'}
            label={'Entrepot'}
            placeholder={'Entrepot'}
            isTextInput={true}
            type={'text'}
          />

          <CustomInput<typeof formSchema>
            control={form.control}
            name={'Note'}
            label={'Note'}
            placeholder={'Note'}
            isTextArea={true}
            type={'text'}
          />
        </form>
      </Form>
    </>
  );
};
