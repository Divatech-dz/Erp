import React from 'react';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';

import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from '@/components/form-schema';

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder: string;
  type?: string;
}

export const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type = 'text',
}: Readonly<CustomInput>) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>

          <FormControl>
            <Input
              placeholder={placeholder}
              className="input-class"
              type={type}
              {...field}
            />
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  );
};
