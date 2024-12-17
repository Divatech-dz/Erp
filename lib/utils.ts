/* eslint-disable no-prototype-builtins */
import { AuthType } from '@/constants';
import { TabsNameInterface } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import qs from 'query-string';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// FORMAT DATE TIME
export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    month: 'short', // abbreviated month name (e.g., 'Oct')
    day: 'numeric', // numeric day of the month (e.g., '25')
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const dateDayOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    year: 'numeric', // numeric year (e.g., '2023')
    month: '2-digit', // abbreviated month name (e.g., 'Oct')
    day: '2-digit', // numeric day of the month (e.g., '25')
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short', // abbreviated month name (e.g., 'Oct')
    year: 'numeric', // numeric year (e.g., '2023')
    day: 'numeric', // numeric day of the month (e.g., '25')
  };

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  };

  const formattedDateTime: string = new Date(dateString).toLocaleString(
    'en-US',
    dateTimeOptions,
  );

  const formattedDateDay: string = new Date(dateString).toLocaleString(
    'en-US',
    dateDayOptions,
  );

  const formattedDate: string = new Date(dateString).toLocaleString(
    'en-US',
    dateOptions,
  );

  const formattedTime: string = new Date(dateString).toLocaleString(
    'en-US',
    timeOptions,
  );

  return {
    dateTime: formattedDateTime,
    dateDay: formattedDateDay,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  };
};

export function formatAmount(amount: number): string {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const removeSpecialCharacters = (value: string) => {
  return value.replace(/[^\w\s]/gi, '');
};

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true },
  );
}

export function extractCustomerIdFromUrl(url: string) {
  // Split the URL string by '/'
  const parts = url.split('/');

  // Extract the last part, which represents the customer ID
  const customerId = parts[parts.length - 1];

  return customerId;
}

export function encryptId(id: string) {
  return btoa(id);
}

export function decryptId(id: string) {
  return atob(id);
}

export const getTransactionStatus = (date: Date) => {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? 'Processing' : 'Success';
};

export const authFormSchema = (type: string) => {
  const isSignIn = type === AuthType.SignIn;
  const isSignUp = type === AuthType.SignUp;
  const conditionalField = (condition: boolean, schema: any) => (condition ? schema : z.undefined());

  return z.object({
    firstName: conditionalField(!isSignIn, z.string().min(3)),
    firstNameArabic: conditionalField(isSignUp, z.string().optional()),
    Function: conditionalField(isSignUp, z.string().optional()),
    FunctionArabic: conditionalField(isSignUp, z.string().optional()),
    MatriculeDeclaration:conditionalField(isSignUp,z.string().optional()),
    startDate: conditionalField(isSignUp, z.string().transform((val) => new Date(val)).optional()),
    placeOfBirth: conditionalField(isSignUp, z.string().optional()),
    placeOfBirthArabic: conditionalField(isSignUp, z.string().optional()),
    HourlyCost: conditionalField(isSignUp, z.number().optional()),
    DateOfBirth: conditionalField(isSignUp, z.string().transform((val) => new Date(val)).optional()),
    endDate: conditionalField(isSignUp, z.string().transform((val) => new Date(val)).optional()),
    Salary: conditionalField(isSignUp, z.number().optional()),
    PrimePanierTransport: conditionalField(isSignUp, z.number().optional()),
    Echelon: conditionalField(isSignUp, z.number().optional()),
    CountNumber:conditionalField(isSignUp,z.number().optional()),
    SocialInsuranceNumber:conditionalField(isSignUp,z.number().optional()),
    username:conditionalField(isSignUp, z
      .string({
        required_error: 'username is required',
        invalid_type_error: 'username must be a string',
      })
      .min(3)),

    password:conditionalField(isSignUp, z
      .string({
        required_error: 'password is required',
        invalid_type_error: 'password must be a string',
      })
      .min(8)),
  });
};

export const  billFormSchema=()=>{
  return z.object({
    orderNumber:z.number(),
    orderDate:z.date(),
    AssociatedPurchaseOrder:z.string(),
    warehouse:z.string(),
    Note:z.string(),

})}


  export const getSubLevelKeys = (data: TabsNameInterface, topKey: string): string[] | undefined => {
    return data[topKey] ? Object.keys(data[topKey]) : undefined;
  };
