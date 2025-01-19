import {cn} from '@/lib/utils';
import Image from 'next/image';
import React, {JSX} from 'react';
import {icons} from './icons';

type ColumnRenderer = (row: Record<string, any>, name: string) => JSX.Element;

const formatDate=(dateString: string): string => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

const calculateMinutesLate=(arrivalTime: string): number => {
    const [hours, minutes] = arrivalTime.split(':').map(Number);
    const arrivalDate = new Date();
    arrivalDate.setHours(hours, minutes, 0, 0);

    const nineAM = new Date();
    nineAM.setHours(9, 0, 0, 0);

    const diff = arrivalDate.getTime() - nineAM.getTime();
    return Math.max(0, Math.floor(diff / 60000)); // Convert milliseconds to minutes
}

const formatAmount=(amount: number): string => {
    return amount.toLocaleString('fr-FR', { style: 'currency', currency: 'DZD' });
}

const columnRenderers: Record<string, ColumnRenderer> = {

    "PV TTC -P-": (row, name) => <p>{formatAmount(Number(row[name]))}</p>,
    "PV TTC -R-": (row, name) => <p>{formatAmount(Number(row[name]))}</p>,
    "Etat de validation": (row, name) => (<p className={cn('inline-block px-2 py-1 rounded text-white ', {
        'bg-green-500': row[name],
        'bg-red-500': !row[name],
    })}
    >
        {row[name] ? 'Validé' : 'En attente'}
    </p>),
    "Documents associés": (row, name) => {
        return (
            <div className="space-x-2">
                {row[name]?.map((value: { value: string | undefined; key: string; }) => <a href={value?.value}
                                                                                           className='inline-block px-2 py-1 rounded-full text-white font-semibold bg-black-1 hover:underline'
                                                                                           key={value?.key}>{value.key}</a>)}
            </div>
        )
    },

    "Validation": (row, name) => (<p className={cn('inline-block px-2 py-1 rounded text-white ', {
        'bg-green-500': row[name],
        'bg-red-500': !row[name],
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
    "Minutes en retard": (row, name)=> <p>{calculateMinutesLate(row["Heures d'arrivée"])}</p>,
    "Date d'absence": (row, name)=> <p>{formatDate(row[name])}</p>,
    "Date": (row, name)=> <p>{formatDate(row[name])}</p>,
    'Date de prise': (row, name)=> <p>{formatDate(row[name])}</p>,
    'Chiffre d\'affaire': (row, name)=> <p>{formatAmount(row[name])}</p>
};

export default columnRenderers;