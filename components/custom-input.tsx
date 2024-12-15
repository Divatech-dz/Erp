import React from 'react';
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { format } from "date-fns"
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema, cn } from '@/lib/utils';
import { AuthType } from '@/constants';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { CalendarIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Calendar } from './ui/calendar';

const formSchema = authFormSchema(AuthType.SignIn);

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  label: string;
  placeholder?: string;
  type?: string;
  isTextInput?:boolean
}

export const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  isTextInput
}: Readonly<CustomInput>) => {
  const [date, setDate] = React.useState<Date>()
  
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          
          <FormControl>
            { isTextInput?
            <Input
              placeholder={placeholder}
              className="input-class"
              type={type}
             
              {...field}
              value={field.value ?? ''}
              onChange={(e) => {
                let value;
              
                if (type === 'number') {
                  value = Number(e.target.value);
                } else if (type === 'date') {
                  value = e.target.value ? new Date(e.target.value) : null; 
                } else {
                  value = e.target.value; 
                }
              
                field.onChange(value);
              }}
              
            />: <Popover>
            <PopoverTrigger asChild>

              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "yyyy-MM-dd") : <span>choisir une date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>}
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  );
};
