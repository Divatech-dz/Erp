import {cn} from '@/lib/utils';
import Image from 'next/image';
import React, {JSX} from 'react';
import {icons} from './icons';

type ColumnRenderer = (row: Record<string, any>, name: string) => JSX.Element;

const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const calculateMinutesLate = (arrivalTime: string): number => {
    const [hours, minutes] = arrivalTime.split(':').map(Number);
    const arrivalDate = new Date();
    arrivalDate.setHours(hours, minutes, 0, 0);

    const nineAM = new Date();
    nineAM.setHours(9, 0, 0, 0);

    const diff = arrivalDate.getTime() - nineAM.getTime();
    return Math.max(0, Math.floor(diff / 60000)); // Convert milliseconds to minutes
}

const formatAmount = (amount: number): string => {
    return amount.toLocaleString('fr-FR', {style: 'currency', currency: 'DZD'});
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
    "Montant": (row, name) => <p>{Number(row[name]) + ' dzd'}</p>,
    "Actif": (row, name) => (<p className={cn('inline-block px-2 py-1 rounded text-white ', {
        'bg-green-500': row[name],
        'bg-red-500': !row[name],
    })}
    >
        {row[name] ? 'Actif' : 'Inactif'}
    </p>),
    "Salaire": (row, name) => <p>{Number(row[name]) + ' dzd'}</p>,
    "Prime Panier et Transport": (row, name) => <p>{Number(row[name]) + ' dzd'}</p>,
    "Date de fin": (row, name) => <p>{formatDate(row[name])}</p>,
    "Date de début congé": (row, name) => <p>{formatDate(row[name])}</p>,
    "Date de fin congé": (row, name) => <p>{formatDate(row[name])}</p>,
    "Date de début": (row, name) => <p>{formatDate(row[name])}</p>,
    "Etat": (row, name) => (<p className={cn('inline-block px-2 py-1 rounded text-white ', {
        'bg-green-500': row[name],
        'bg-red-500': !row[name],
    })}
    >
        {row[name] ? 'Actif' : 'Inactif'}
    </p>),
    "Nombre de jours restant": (row, name) => <p>{Number(row["Nombre de jours"] - row["Nombre de jours pris"])}</p>,
    "Date de pointage": (row, name) => <p>{formatDate(row[name])}</p>,
    "Minutes en retard": (row, name) => <p>{calculateMinutesLate(row["Heures d'arrivée"])}</p>,
    "Date d'absence": (row, name) => <p>{formatDate(row[name])}</p>,
    "Date": (row, name) => <p>{formatDate(row[name])}</p>,
    'Date de prise': (row, name) => <p>{formatDate(row[name])}</p>,
    'Chiffre d\'affaire': (row, name) => <p>{formatAmount(row[name])}</p>,
    "Statut": (row, name) => (<p className={cn('inline-block px-2 py-1 rounded text-white ', {
        'bg-green-500': row[name],
        'bg-red-500': !row[name],
    })}
    >
        {row[name] ? 'Actif' : 'Inactif'}
    </p>),
    "Etat d'acceptation": (row, name) => (<p className={cn('inline-block px-2 py-1 rounded text-white ', {
        'bg-green-500': row[name],
        'bg-red-500': !row[name],
    })}
    >
        {row[name] ? 'Accepté' : 'En-attente'}
    </p>),
    "Etat de règlement bon": (row, name) => (<p className={cn('inline-block px-2 py-1 rounded  ', {

    })}
    >
        {row[name]}
    </p>),
    "Etat bon": (row, name) => (<p className={cn('inline-block px-2 py-1 rounded text-white ', {
        'bg-green-500': row[name],
        'bg-red-500': !row[name],
    })}
    >
        {row[name] ? 'Validé' : 'En attente'}
    </p>),

};

export default columnRenderers;