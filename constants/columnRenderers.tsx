import { cn, formatAmount } from '@/lib/utils';
import Image from 'next/image';
import React, {JSX} from 'react';
import { icons } from './icons';

type ColumnRenderer = (row: Record<string, any>, name: string) => JSX.Element;


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

};

export default columnRenderers;