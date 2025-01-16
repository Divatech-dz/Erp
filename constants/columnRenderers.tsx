import { cn, formatAmount } from '@/lib/utils';
import Image from 'next/image';
import React, {JSX} from 'react';
import { icons } from './icons';

type ColumnRenderer = (row: Record<string, any>, name: string) => JSX.Element;

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function calculateMinutesLate(arrivalTime: string): number {
  const [hours, minutes] = arrivalTime.split(':').map(Number);
  const arrivalDate = new Date();
  arrivalDate.setHours(hours, minutes, 0, 0);

  const nineAM = new Date();
  nineAM.setHours(9, 0, 0, 0);

  const diff = arrivalDate.getTime() - nineAM.getTime();
  return Math.max(0, Math.floor(diff / 60000)); // Convert milliseconds to minutes
}

const columnRenderers: Record<string, ColumnRenderer> = {

  "PV TTC -P-": (row, name) => <p>{formatAmount(Number(row[name]))}</p>,
  "PV TTC -R-": (row, name) => <p>{formatAmount(Number(row[name]))}</p>,
  "Etat de validation":(row, name) => ( <p className={cn('inline-block px-2 py-1 rounded-full text-white font-semibold ', {
    'bg-green-500': row[name], 
    'bg-yellow-500': !row[name], 

  })}
>
  {row[name] ? 'Validé' : 'En attente'}
</p>),
  "Prix Conseillé TTC":(row,name)=> <p>{(row[name]).toFixed(2)} </p>,
  "Prix Revendeur TTC":(row,name)=> <p>{(row[name]).toFixed(2)} </p>,
 "Documents associés": (row,name) => {
  return (
    <div className="space-x-2">
      {row[name]?.map((value: { value: string | undefined; key: string; })=><a href={value?.value} className='inline-block px-2 py-1 rounded-full text-white font-semibold bg-black-1 hover:underline' key={value?.key}>{value.key}</a>)}
    </div>
  )
 },
 'Livraison':(row,name)=>{
const isTruck = row[name];
 return (
   <div className="flex items-center space-x-2">
     {isTruck ? (
       <>
         <p className="text-gray-800">{row[name]}</p>
         <Image
           src={icons.truck}
           height={20}
           width={20}
           alt="truck"
           className="inline-block"
         />
       </>
     ) : (
       <Image
         src={icons.walkingMan}
         height={20}
         width={20}
         alt="walking-man"
         className="inline-block"
       />
     )}
   </div>
 )},
 "Validation":(row, name) => ( <p className={cn('inline-block px-2 py-1 rounded-full text-white font-semibold ', {
    'bg-green-500': row[name], 
    'bg-yellow-500': !row[name], 
  })}
>
  {row[name] ? 'Validé' : 'En attente'}
</p>),
    "Date de virement": (row, name) => <p>{formatDate(row[name])}</p>,
     "Montant": (row, name) => <p>{Number(row[name]) +' dzd'}</p>,
};

export default columnRenderers;