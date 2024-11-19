import { CardProps, SalesProps, SidebarLink } from '@/types';
import { icons } from './icons';

export const sidebarLinks: SidebarLink[] = [
  {
    id: '1',
    imgURL: icons.Products,
    route: [
      {
        name: 'Produits',
        link: '/produits',
      },
      {
        name: 'Liste des prix',
        link: '/listePrix',
      },
    ],
    label: 'Produits',
  },
  {
    id: '2',
    imgURL: icons.client,
    route: [
      {
        name: 'Liste des clients',
        link: '/listeClients',
      },
      {
        name: 'Prospection des clients',
        link: '/prospectionClients',
      },
    ],
    label: 'Clients',
  },
  {
    id: '3',
    imgURL: icons.Stock,
    route: [
      {
        name: 'Bons de transfert',
        link: '/bonsTransfert',
      },

      {
        name: 'Bons de sortie',
        link: '/bonsSortie',
      },

      {
        name: 'Bons de retour',
        link: '/bonsRetour',
      },
    ],
    label: 'Stock',
  },
  {
    id: '4',
    imgURL: icons.Sell,
    route: [
      {
        name: 'Bons de devis',
        link: '/bonsDevis',
      },
      {
        name: 'Bons de commande',
        link: '/bonsCommandeVente',
      },
      {
        name: 'Bons de commande kit',
        link: '/bonsCommandeKit',
      },
      {
        name: 'Bons de commande carton',
        link: '/bonsCommandeCarton',
      },
      {
        name: 'Bons de commande PC',
        link: '/bonCommandePC',
      },
      {
        name: 'Bons de commande modifiés',
        link: '/bonsCommandeModifies',
      },
      {
        name: 'Bons de comptoire',
        link: '/bonsComptoireVente',
      },
      {
        name: 'Bons de Comptoire modifiés',
        link: '/bonsComptoireModifies',
      },
      {
        name: 'Bons de garantie',
        link: '/bonsGarantie',
      },
      {
        name: 'Produits non livrés',
        link: '/produitsNonLivre',
      },
      {
        name: 'Bons de retour',
        link: '/bonsRetourVente',
      },
    ],
    label: 'Vente',
  },

  {
    id: '5',
    imgURL: icons.Goal,
    route: [
      {
        name: 'Equipes',
        link: '/equipes',
      },
      {
        name: 'Etat des objectifs',
        link: '/etatObjectifs',
      },
      {
        name: 'Prévision globale',
        link: '/previsionGlobale',
      },
      {
        name: 'Prévisions',
        link: '/previsions',
      },
    ],
    label: 'Objectif',
  },
  {
    id: '6',
    imgURL: icons.Statistic,
    route: [
      {
        name: 'Clients / Produits',
        link: '/cleintsProduits',
      },

      {
        name: 'Fournisseurs',
        link: '/fourisseursStatistiques',
      },
    ],
    label: 'Statistique',
  },
];

export enum AuthType {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
}

export const infoCard = [
  {
    name: 'CPU',
    total: 23455,
  },
  {
    name: 'MOBO',
    total: 23455,
  },
  {
    name: 'RAM',
    total: 23455,
  },
  {
    name: 'COOLER',
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
    name: 'GPU',
    total: 23455,
  },
  {
    name: 'CASE',
    total: 23455,
  },
  {
    name: 'FAN',
    total: 23455,
  },
  {
    name: 'ÉCRAN',
    total: 23455,
  },
  {
    name: 'SOURIS',
    total: 23455,
  },
  {
    name: 'CLAVIER',
    total: 23455,
  },
  {
    name: 'CASQUE',
    total: 23455,
  },
  {
    name: 'TAPIS',
    total: 23455,
  },
  {
    name: 'CABLES',
    total: 23455,
  },
];

export enum QuantityLabels {
  Sold = 'Quantité vendue',
  ForSale = 'Quantité en vente',
  Available = 'Quantité disponible',
}

export const cardData: CardProps[] = [
  {
    key: 1,
    label: 'Total Bon de Vente',
    amount: '45,231.89',
    description: '+20.1% from last month',
    color: 'text-success-600',
  },
  {
    key: 2,
    label: 'Total Bon de Livraison',
    amount: '+2350',
    description: '+180.1% from last month',
    color: 'text-orange-600',
  },
  {
    key: 3,
    label: 'Total Bon de Retour',
    amount: '+12,234',
    description: '+19% from last month',
    color: 'text-blue-600',
  },
  {
    key: 4,
    label: 'Base Clientèle',
    amount: '+573',
    description: '+201 from last month',
    color: 'text-red-600',
  },
];

export const userSalesData: SalesProps[] = [
  {
    key: 1,
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    salesAmount: '+$1,999.00',
  },
  {
    key: 2,
    name: 'Jackson Lee',
    email: 'isabella.nguyen@email.com',
    salesAmount: '+$1,999.00',
  },
  {
    key: 3,
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    salesAmount: '+$39.00',
  },
  {
    key: 4,
    name: 'William Kim',
    email: 'will@email.com',
    salesAmount: '+$299.00',
  },
  {
    key: 5,
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    salesAmount: '+$39.00',
  },
];
