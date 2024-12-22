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
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from './ui/textarea';

const formSchema = authFormSchema(AuthType.SignIn);

interface CustomInput<TSchema extends z.ZodType<any, any>> {
  control: Control<z.infer<TSchema>>; 
  name: FieldPath<z.infer<TSchema>>; 
  label: string;
  placeholder?: string;
  type?: string;
  isTextInput?: boolean;
  isTextArea?: boolean;
}

export const CustomInput = <TSchema extends z.ZodType<any, any>>({
  control,
  name,
  label,
  placeholder,
  type = "text",
  isTextInput,
  isTextArea,
}:CustomInput<TSchema>) => {
  const [date, setDate] = React.useState<Date>()


  const renderInputField = (field:any) => {
    if (isTextInput) {
      return (
        <Input
          placeholder={placeholder}
          className="input-class"
          type={type}
          {...field}
          value={field.value ?? ""}
          onChange={(e) => {
            let value;
            if (type === "number") {
              value = Number(e.target.value);
            } else if (type === "date") {
              value = e.target.value ? new Date(e.target.value) : null;
            } else {
              value = e.target.value;
            }
            field.onChange(value);
          }}
        />
      );
    }
  
    if (isTextArea) {
      return (
        <Textarea
          placeholder={placeholder}
          className="input-class"
        />
      );
    }
  
    return (
      <Popover>
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
            className="rounded-md border shadow bg-white"
          />
        </PopoverContent>
      </Popover>
    );
  };


  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>

          <FormControl>
            {renderInputField(field)}
          </FormControl>
          <FormMessage className="form-message mt-2" />
        </div>
      )}
    />
  );
};
