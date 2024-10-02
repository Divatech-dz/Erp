import { CardProps, SalesProps, TabsNameInterface } from '@/types';
import { Users, SquareArrowLeft, BadgePercent, Truck } from 'lucide-react';

export const sidebarLinks = [
  {
    imgURL: '/icons/company.svg',
    route: [
      {
        name: 'Divatech',
        link: '/divatech',
      },
      {
        name: 'GZ - Mohammadia mall',
        link: '/gamingZoneMohammadiaMall',
      },
      {
        name: 'GZ - Park mall',
        link: '/gammingZoneParkMall',
      },
      {
        name: 'Entrepôt Reghaia',
        link: '/entrepotReghaia',
      },
      {
        name: 'Mag 54',
        link: '/mag54',
      },
      {
        name: 'Mag 54 - Entrepôt',
        link: '/mag54Entrepot',
      },
    ],
    label: 'Divatech',
  },
  {
    imgURL: '/icons/overview.svg',
    route: [
      {
        name: 'identification',
        link: '/identification',
      },
      {
        name: 'Comptes Trésorerie',
        link: '/comptesTresorerie',
      },
      {
        name: 'Type de Clients',
        link: '/typeClients',
      },
      {
        name: 'Devises',
        link: '/devises',
      },
      {
        name: 'Taxes Douanières',
        link: '/taxesDouanieres',
      },
      {
        name: 'TVA',
        link: '/TVA',
      },
      {
        name: 'Unités de mesures',
        link: '/unitMesures',
      },
      {
        name: 'Valeures Du Devise',
        link: '/valeursDevise',
      },
      {
        name: 'Liste des utilisateurs',
        link: '/utilisateurs',
      },
      {
        name: 'Groupe des utilisateurs',
        link: '/groupesUtilisateurs',
      },
      {
        name: 'Permissions',
        link: '/permissions',
      },
    ],
    label: 'Entreprise',
  },
  {
    imgURL: '/icons/products.svg',
    route: [
      {
        name: 'Catégories',
        link: '/categories',
      },
      {
        name: 'Produits',
        link: '/produits',
      },
      {
        name: 'Liste des prix',
        link: '/listePrix',
      },
      {
        name: 'Produits / Entrepots',
        link: '/produitsEntrepots',
      },
      {
        name: 'Archives de vérifications',
        link: '/archivesVerifications',
      },
      {
        name: 'Etat du stock',
        link: '/etatStock',
      },
      {
        name: 'Vérification du stock',
        link: '/verificationStock',
      },
    ],
    label: 'Produits',
  },
  {
    imgURL: '/icons/client.svg',
    route: [
      {
        name: 'Liste des clients',
        link: '/listeClients',
      },
      {
        name: 'Prospection des clients',
        link: '/prospectionClients',
      },
      {
        name: 'Fournisseurs',
        link: '/fournisseurs',
      },
      {
        name: 'Banques',
        link: '/banques',
      },
      {
        name: 'Agences bancaires',
        link: '/agencesBancaires',
      },
      {
        name: 'Compte bancaire',
        link: '/compteBancaire',
      },
    ],
    label: 'Clients',
  },
  {
    imgURL: '/icons/stock.svg',
    route: [
      {
        name: 'Entrepôts',
        link: '/entrepots',
      },
      {
        name: 'Répartition des produits',
        link: '/ repartitionProduits',
      },
      {
        name: 'Bons d' + "'" + 'entrée',
        link: '/bonsEntree',
      },
      {
        name: 'Bons de transfert',
        link: '/bonsTransfert',
      },
      {
        name: 'Bons de transfert magasins',
        link: '/bonTransfertMagasin',
      },
      {
        name: 'Bons de sortie',
        link: '/bonsSortie',
      },
      {
        name: 'Bons de réintégration',
        link: '/bonsReintegration',
      },
      {
        name: 'Bon d' + "'" + 'échange',
        link: '/bonEchange',
      },
      {
        name: 'Bons de maintenance',
        link: '/bonsMaintenance',
      },
      {
        name: 'Bons de retour',
        link: '/bonsRetour',
      },
      {
        name: 'Bons de réforme',
        link: '/bonsReforme',
      },
      {
        name: 'Etat d' + "'" + 'entrée',
        link: '/etatEntree',
      },
      {
        name: 'Etat de sortie',
        link: '/etatSortie',
      },
      {
        name: 'Etat de retour',
        link: '/etatRetour',
      },
      {
        name: 'Etat de maintenance',
        link: '/etatMaintenance',
      },
      {
        name: 'Etat d' + "'" + 'échange',
        link: '/etatEchange',
      },
      {
        name: 'Etat de réintégration',
        link: '/etatReintegration',
      },
      {
        name: 'Etat de stock réforeme',
        link: '/etatStockReforme',
      },
      {
        name: 'Inventaire initial',
        link: '/inventaireInitial',
      },
      {
        name: 'Inverataire annuel',
        link: '/inventaireAnnuel',
      },
    ],
    label: 'Stock',
  },
  {
    imgURL: '/icons/stop-desk.svg',
    route: [
      {
        name: 'Comptoires',
        link: '/comptoires',
      },
      {
        name: 'Clôture',
        link: '/cloture',
      },
      {
        name: 'Règlements de comptoire',
        link: '/reglementsComptoire',
      },
      {
        name: 'Fidélité clients',
        link: '/feideliteClients',
      },
      {
        name: 'Points de ventes',
        link: '/pointsVentes',
      },
      {
        name: 'Caisse/utilisateurs',
        link: '/caisseUtilisateurs',
      },
      {
        name: 'Fidèlité',
        link: '/fidelite',
      },
    ],
    label: 'Comptoire',
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
