import { CardProps, SalesProps, TabsNameInterface } from '@/types';
import { Users, SquareArrowLeft, BadgePercent, Truck } from 'lucide-react';

export const sidebarLinks = [
  {
    imgURL: '/icons/home.svg',
    route: '/',
    label: 'Home',
  },
  {
    imgURL: '/icons/dollar-circle.svg',
    route: '/enterprise',
    label: 'Enterprise',
  },
  {
    imgURL: '/icons/transaction.svg',
    route: '/Products',
    label: 'Products',
  },
  {
    imgURL: '/icons/money-send.svg',
    route: '/Tiers',
    label: 'Tiers',
  },
];

export enum AuthType {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
}
export enum TabsKey {
  Enterprise = 'enterprise',
}
export const TabsName: TabsNameInterface = {
  enterprise: {
    'Paramètres client': ['Identification', 'Comptes Tresorerie'],
    'Tables de Bases': [
      'Types Client',
      'Devises',
      'Taxes Dounaiéres',
      'TVA',
      'Unités de Mesure ',
      'Valeurs de Devises',
    ],
    'Gestion des utilisateurs': [
      'Liste des utilisateurs',
      'Groupes des utilisateurs',
      'Permissions',
    ],
  },
};
export const infoCard = [
  {
    name: 'CPU',
    total: 23455,
  },
  {
    name: 'MB',
    total: 23455,
  },
  {
    name: 'CPUC',
    total: 23455,
  },
  {
    name: 'SSD',
    total: 23455,
  },
  {
    name: 'PSU',
    total: 23455,
  },
  {
    name: 'PSU',
    total: 23455,
  },
  {
    name: 'GPU',
    total: 23455,
  },
  {
    name: 'CASE',
    total: 23455,
  },
  {
    name: 'CASEF',
    total: 23455,
  },
  {
    name: 'CASEF',
    total: 23455,
  },
  {
    name: 'Monitor',
    total: 23455,
  },
  {
    name: 'clavier',
    total: 23455,
  },
];
export enum QuantityLabels {
  Sold = 'Quantity Sold',
  ForSale = 'Quantity For Sale',
  Available = 'Quantity Available',
}
export const cardData: CardProps[] = [
  {
    label: 'Total Bon de Vente',
    amount: '45,231.89',
    description: '+20.1% from last month',
    icon: BadgePercent,
    color: 'text-success-600',
  },
  {
    label: 'Total Bon de Livraison',
    amount: '+2350',
    description: '+180.1% from last month',
    icon: Truck,
    color: 'text-orange-600',
  },
  {
    label: 'Total Bon de Retour',
    amount: '+12,234',
    description: '+19% from last month',
    icon: SquareArrowLeft,
    color: 'text-blue-600',
  },
  {
    label: 'Base Clientèle',
    amount: '+573',
    description: '+201 from last month',
    icon: Users,
    color: 'text-red-600',
  },
];
export const userSalesData: SalesProps[] = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    salesAmount: '+$1,999.00',
  },
  {
    name: 'Jackson Lee',
    email: 'isabella.nguyen@email.com',
    salesAmount: '+$1,999.00',
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    salesAmount: '+$39.00',
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    salesAmount: '+$299.00',
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    salesAmount: '+$39.00',
  },
];
