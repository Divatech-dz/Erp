import { CardProps, Column, rowsType, SalesProps, SidebarLink } from '@/types';
import { Users, SquareArrowLeft, BadgePercent, Truck } from 'lucide-react';
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
  {
    id: '7',
    imgURL: icons.Admin,
    route: [
      {
        name: 'Gestion des utilisateurs',
        link: '/utilisateurs',
      },

     
    ],
    label: 'Admin',
  },
];

export enum AuthType {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
  Bill='bill'
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

export const rowTable: rowsType[] = [
  {
    id: '1',
    name: 'Référence',
    sort: false
  },
  {
    id: '2',
    name: 'Désignation',
    sort: false
  },
  {
    id: '3',
    name: 'Quantité',
    sort: true,
    sortBy: 'quantity_globale'
  },
  {
    id: '4',
    name: 'PV TTC -P-',
    sort: true,
    sortBy: 'prix_vente'
  },
  {
    id: '5',
    name: 'PV TTC - R -',
    sort: false
  },
]

export const StatusOptions: rowsType[]=[  {
  id: '1',
  name: 'Active',
},
{
  id: '2',
  name: 'Pending',
},
{
  id: '3',
  name: 'Paused',
},]

export const userRowsTable: rowsType[] = [
  {
    id: '1',
    name: 'Nom',
    sort: false
  },
  {
    id: '2',
    name: 'Prénom',
    sort: false
  },
  {
    id: '3',
    name: 'Rôle',
    sort: false
  }
]

export const statusColors: Record<"Active" | "Pending" | "Paused", string> = {
  Active: "bg-green-500",
  Pending: "bg-yellow-500",
  Paused: "bg-red-500",
};
export const bill={
  orderNumber:0,
  orderDate:new Date(),
  AssociatedPurchaseOrder:'',
  warehouse:'',
  Note:'',
}

export const actions: Column[] = [{
  id: '1',
  name: 'Edit',
  opensModal: true
}, {
  id: '2',
  name: 'View',
  opensModal: true
},
{
  id: '3',
  name: 'Delete',
  opensModal: true
}]

export const status:Column[]=[{ id: '1', name: 'banque' }, { id: '2', name: 'CPP' }]

