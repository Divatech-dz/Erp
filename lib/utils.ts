/* eslint-disable no-prototype-builtins */
import axiosInstance from "@/lib/axios";
import {TabsNameInterface} from '@/types';

import Cookies from 'js-cookie';

import {type ClassValue, clsx} from 'clsx';

import qs from 'query-string';

import {twMerge} from 'tailwind-merge';

import {z} from 'zod';

import * as XLSX from 'xlsx';

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

export function formatDate  (dateString: string): string  {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export function formatAmount(amount: number): string {
    const formatter = new Intl.NumberFormat("DZD", {
        style: 'currency',
        currency: 'DZD',
        minimumFractionDigits: 2,
    });

    return formatter.format(amount);
}

export function calculateMinutesLate (arrivalTime: string): number  {
    const [hours, minutes] = arrivalTime.split(':').map(Number);
    const arrivalDate = new Date();
    arrivalDate.setHours(hours, minutes, 0, 0);

    const nineAM = new Date();
    nineAM.setHours(9, 0, 0, 0);

    const diff = arrivalDate.getTime() - nineAM.getTime();
    return Math.max(0, Math.floor(diff / 60000)); // Convert milliseconds to minutes
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

export function formUrlQuery({params, key, value}: UrlQueryParams) {
    const currentUrl = qs.parse(params);

    currentUrl[key] = value;

    return qs.stringifyUrl(
        {
            url: window.location.pathname,
            query: currentUrl,
        },
        {skipNull: true},
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

export const authFormSchemaSignIn = () => {
    return z.object({
        username: z
            .string({
                required_error: 'username is required',
                invalid_type_error: 'username must be a string',
            })
            .min(3, 'Username must be at least 3 characters long'),

        password: z
            .string({
                required_error: 'password is required',
                invalid_type_error: 'password must be a string',
            })
            .min(8, 'Password must be at least 8 characters long'),
    });
};

export const authFormSchemaSignUp = () => {
    return z.object({
        firstName: z.string().min(3),
        firstNameArabic: z.string().optional(),
        Function: z.string().optional(),
        FunctionArabic: z.string().optional(),
        MatriculeDeclaration: z.string().optional(),
        startDate: z.string().transform((val) => new Date(val)).optional(),
        placeOfBirth: z.string().optional(),
        placeOfBirthArabic: z.string().optional(),
        HourlyCost: z.number().optional(),
        DateOfBirth: z.string().transform((val) => new Date(val)).optional(),
        endDate: z.string().transform((val) => new Date(val)).optional(),
        Salary: z.number().optional(),
        PrimePanierTransport: z.number().optional(),
        Echelon: z.number().optional(),
        CountNumber: z.number().optional(),
        SocialInsuranceNumber: z.number().optional(),


    });
}

export const billFormSchema = () => {
    return z.object({
        orderNumber: z.number(),
        orderDate: z.date(),
        AssociatedPurchaseOrder: z.string(),
        warehouse: z.string(),
        Note: z.string(),

    })
}

export const getSubLevelKeys = (data: TabsNameInterface, topKey: string): string[] | undefined => {
    return data[topKey] ? Object.keys(data[topKey]) : undefined;
};

export const handleExportExcel = (data: []) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'exported_data.xlsx');
};

export const parseExcelFile = (file: File, onSuccess: (jsonData: any[]) => void, onError: (error: Error) => void) => {
    const reader = new FileReader();

    reader.onload = (e) => {
        try {
            const data = new Uint8Array(e.target?.result as ArrayBuffer);
            const workbook = XLSX.read(data, {type: 'array'});

            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            onSuccess(jsonData);
        } catch (error: unknown) {
            if (error instanceof Error) {
                onError(error);
            } else {

                onError(new Error('An unknown error occurred'));
            }
        }
    };
    reader.readAsArrayBuffer(file);
};

export const fetchWithAuth = async (url: string, method: 'GET' | 'POST' = 'GET', data?: any) => {
  const token = Cookies.get('token');
  if (!token) {
    console.error('No token found');
    throw new Error('No token found');
  }

  try {
    const response = await axiosInstance({
      url,
      method,
      headers: { Authorization: `Bearer ${token}` },
      data,
    });
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching ${url}:`, error);
    throw error;
  }
};



 export function transformNestedData(
  data: any[],
  keyMap: Record<string, string>,
  documentKeys?: string[], 
  aggregatedKeyName?: string 
): any[] {
  return data?.map((item) => {
    const transformed: Record<string, any> = {};
    const aggregatedArray: { key: string; value: string }[] = [];

    for (const [oldKey, newKey] of Object.entries(keyMap)) {
        const keys = oldKey.split(".");
        let value = item;

        for (const key of keys) {
            value = value ? value[key] : undefined;
        }

        if (documentKeys?.includes(oldKey)) {
            aggregatedArray.push({
                key: newKey,
                value: value ? `${value}` : "",
            });
        } else if (Array.isArray(value)) {
            transformed[newKey] = value.map(v => typeof v === "object" && v);
        } else if (typeof value === "object" && value !== null) {
            transformed[newKey] = JSON.stringify(value);
        } else {
            transformed[newKey] = value;
        }
    }

    transformed[aggregatedKeyName!] = aggregatedArray;
    return transformed;
});
}




export function transformNestedDataCategory(
    data: any[], // Tableau de données source
    keyMap: Record<string, string>, // Mappage des clés à transformer
    documentKeys?: string[], // Clés spéciales pour l'agrégation
    aggregatedKeyName: string = "aggregatedData", // Nom de la clé pour les données agrégées
    countProducts?: (item: any) => number // Fonction pour calculer le nombre de produits
  ): any[] {
    return data?.map((item) => {
      const transformed: Record<string, any> = {};
      const aggregatedArray: { key: string; value: string }[] = [];
  
      for (const [oldKey, newKey] of Object.entries(keyMap)) {
        // Naviguer dans les objets imbriqués pour obtenir la valeur
        const keys = oldKey.split(".");
        let value = item;
  
        for (const key of keys) {
          value = value ? value[key] : undefined;
        }
  
        // Gérer les clés spéciales pour agrégation
        if (documentKeys?.includes(oldKey)) {
          aggregatedArray.push({
            key: newKey,
            value: value ? `//${value}` : "",
          });
        } 
        // Gérer les tableaux en les convertissant en chaînes
        else if (Array.isArray(value)) {
          transformed[newKey] = value.join(", ");
        } 
        // Gérer les objets en les convertissant en JSON
        else if (typeof value === "object" && value !== null) {
          transformed[newKey] = JSON.stringify(value);
        } 
        // Gérer les valeurs simples
        else {
          transformed[newKey] = value ?? null; // Valeur par défaut : `null`
        }
      }
  
      // Ajouter l'attribut `produits` basé sur la fonction countProducts
      if (countProducts) {
        transformed.produits = countProducts(item);
      }
  
      // Ajouter les données agrégées si applicable
      if (aggregatedArray.length > 0) {
        transformed[aggregatedKeyName] = aggregatedArray;
      }
  
      return transformed;
    });
  }
  