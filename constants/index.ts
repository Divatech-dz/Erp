import {CardProps, Column, rowsType, SalesProps, SidebarLink} from '@/types';

import {Users, SquareArrowLeft, BadgePercent, Truck} from 'lucide-react';

import {icons} from './icons';

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
        name: 'Families',
        link: '/families',
      }, 

            {
                name: 'Liste des prix',
                link: '/listePrix',
            },

      {
        name: 'Produits / Entrepots',
        link: '/entrepotsProduits',
      },
      {
        name: 'Archive de vérification',
        link: '/archiveVerification',
      },
      {
        name: 'Etat de stock',
        link: '/etatStock',
      },
      {
        name: 'Vérification de stock',
        link: '/verificationStock',
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
                link: '/ClientProspect',
            },
            {
                name: 'Liste des fournisseurs',
                link: '/fournisseurs',
            },
            {
                name: 'Liste des banques',
                link: '/banques',
            }
        ],
        label: 'Clients',
    },
    {
        id: '3',
        imgURL: icons.Stock,
        route: [
            {
                name: 'Liste des entrepots',
                link: '/entrepots',
            },
            {
                name: "Bons d'entrée",
                link: '/bonsEntree',
            },

            {
                name: 'Bons de transferts',
                link: '/bonsTransfert',
            },
        ],
        label: 'Stock',
    },
    {
        id: '4',
        imgURL: icons.Sell,
        route: [
            {
                name: 'Bons de livraison',
                link: '/bons-commande',
            },
            {
                name: 'Bons de devis',
                link: '/bonsDevis',
            },

            {
                name: 'Bons de livraison kit',
                link: '/bonsCommandeKit',
            },
            {
                name: 'Bons de livraison carton',
                link: '/bonsCommandeCarton',
            },
            {
                name: 'Bons de livraison PC',
                link: '/bonCommandePC',
            },
            {
                name: 'Bons de livraison modifiés',
                link: '/bonsCommandeModifies',
            },
            {
                name: 'Factures',
                link: '/Facture',
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
      imgURL: icons.comptoire,
      route: [
          {
              name: 'Comptoire',
              link: '/comptoire',
          },
          {
              name: 'Cloture',
              link: '/cloture',
          },

      ],
      label: 'Comptoire',
  },
    {
        id: '6',
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
        id: '7',
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
        id: '8',
        imgURL: icons.Admin,
        route: [
            {
                name: 'Liste des salarié',
                link: '/PageSalarie',
            },
            {
                name: 'Historique des réglements',
                link: '/ReglementComptes',
            },
            {
                name: 'Liste de absences',
                link: '/Absence'
            },
            {
                name: 'Liste des congés',
                link: '/ListeConge'
            },
            {
                name: 'Etat des congés',
                link: '/etatConge',
            },
            {
                name: 'Liste des pointages',
                link: '/Pointage'
            },
            {
                name: 'Liste des avances sur salaire',
                link: '/avanceSalaire'
            },
            {
                name: 'Prime de motivation',
                link: '/PrimePage'
            },
            {
                name: 'Prêt social',
                link: '/PretSocial'
            },
            {
                name: 'Heures supplémentaries',
                link: '/HeureSupp'
            },
        ],
        label: 'Administration',
    },
];

export const sidebarLinksManager = [
    {
        name: 'Produits',
        router: [
            {
                label: 'Produits',
                router: ['families', 'produits', 'Quantite a facteur', 'listePrix']
            },
            {
                label: 'Laison',
                router: ['Produits /Entrops']
            },
            {
                label: 'Etat de Stock',
                router: ['Archive de verification', 'Etat Stock', 'verifcation stock']
            }
        ]
    },
    {
        name: 'Stock',
        router: [
            {
                label: 'entrepots',
                router: ['entrepots', 'repatrition']
            },
            {
                label: 'Mouvements',
                router: ["Bons entrée", "Bons Transfert", "Bons Transfert Entre Magasins", "Bons Sortie"]
            },
            {
                label: 'États',
                router: ['Archive de verification', 'Etat Stock', 'verifcation stock']
            },
            {
                label: 'Inventaires',
                router: ['Archive de verification', 'Etat Stock', 'verifcation stock']
            }
        ]
    },
    {
        name: 'Vente',
        router: [
            {
                label: 'bons-commande',
                router: ['bons-commande', 'Facture']
            },

        ]
    }
]

export enum AuthType {
    SignIn = 'sign-in',
    SignUp = 'sign-up',
    Bill = 'bill'
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
        name: 'PV TTC -R-',
        sort: false
    },
]


export const familiesColumn: rowsType[] = [
    {
        id: '1',
        name: 'Libéllé'
    },
    {
        id: '2',
        name: 'Composant associé'
    },
    {
        id: '3',
        name: 'Nombre de produits'
    },
    {
        id: '4',
        name: 'Type'
    }
]

export const clotureColumn:rowsType[]=[
  {
    id: '1',
    name: "Date d'introduction"
  },
  {
    id: '2',
    name: 'Utilisateur'
  },
  {
    id:'3',
    name: 'Montant Introduit'
  },
  {
    id:'4',
    name:'Montant Totale des bons de vente'
  },
  {
    id:'5',
    name:'Total Versements'
  },
  {
    id:'6',
    name:'Remise Totale des bons de vente'
  },
  {
    id:'7',
    name:'Montant Totale Retorur'
  },

  {
    id:'8',
    name:'Montant encaissé'
  },

  {
    id:'9',
    name:'Etat de clôture'
  }
]

export const prixProduitColumn: rowsType[] = [
    {
        id: '1',
        name: 'Désignation'
    },

    {
        id: '2',
        name: 'Quantité'
    },
    {
        id: '3',
        name: 'Prix Conseillé TTC',
        sort: true,
        sortBy: 'PrixConseillé'
    },
    {
        id: '4',
        name: "Prix Revendeur TTC",
        sort: true,
        sortBy: 'PrixRevendeur'

    }]

export const entrepotColumn: rowsType[] = [
    {
        id: '1',
        name: 'Désignation'
    },
    {
        id: '2',
        name: 'store'
    }]

export const entrepotProductColumn:rowsType[]=[
  {
    id:'1',
    name:'Référence'
  },
  {
    id: '2',
    name: 'Désignation'
  },
  {
    id: '3',
    name: 'Quantité'
  },
  {
    id:'4',
    name:"Prix Revient"
  },
  {
    id:'5',
    name:"Montant"
  }]

export const etatStockColumn:rowsType[]=[
  {
    id: '1',
    name: 'MODEL TYPE'
  },
  {
    id: '2',
    name: 'MODEL NAME'
  },
  {
    id:'3',
    name: 'PART NUMBER'
  },
  {
    id:'4',
    name:'INITIAL STOCK'
  },
  {
    id:'5',
    name:'NEW ARRIVAL'
  },
  {
    id:'6',
    name:'SELLOUT'
  },
  {
    id:'7',
    name:'FINAL QUANTITY'
  }]

export const verificationStockColumn:rowsType[]=[
  {
    id: '1',
    name: 'Référence'
  },
  {
    id: '2',
    name: 'Désignation'
  },
  {
    id: '3',
    name: 'Entrepot'
  },
  {
    id: '4',
    name: 'Qté entrée'
  },
  {
    id: '5',
    name: 'Qté Pc'
  },
  {
    id: '6',
    name: 'Qté reçu'
  },
  {
    id: '7',
    name: 'Qté transféré'
  },
  {
    id: '8',
    name: 'Qté en BP'
  },
  {
    id: '9',
    name: 'Qté vendu'
  },
  {
    id: '10',
    name: 'Qté retour'
  },
  {
    id: '11',
    name: 'Qté actuelle'
  },
  {
    id: '12',
    name: 'Qté réelle'
  }]

export const NotesColumn: rowsType[] = [
    {
        id: '1',
        name: "N° bon"
    },
    {
        id: '2',
        name: "Date bon"
    },
    {
        id: '3',
        name: "Entrepot bon"
    },
    {
        id: '4',
        name: "Client"
    },

    {
        id: '5',
        name: "Livraison"
    },
    {
        id: '6',
        name: "Commercial"
    },
    {
        id: '7',
        name: "Validation"
    }]

export const devisColumn: rowsType[] = [
    {
        id: '1',
        name: 'N° bon'
    },
    {
        id: '2',
        name: 'Date bon'
    },
    {
        id: '3',
        name: 'Client'
    },
    {
        id: '4',
        name: 'utilisateur'
    }]

export const factureColumn: rowsType[] = [
    {
        id: '1',
        name: 'N° facture'
    },
    {
        id: '2',
        name: 'Date facture'
    },
    {
        id: '3',
        name: 'Client'
    },
    {
        id: '4',
        name: 'Bon de livraison associé'
    },
    {
        id: '5',
        name: 'Etat de règlement'
    }]

export const returnColumn: rowsType[] = [
    {
        id: '1',
        name: 'N° bon'
    },
    {
        id: '2',
        name: 'Date bon'
    },
    {
        id: '3',
        name: 'Entrepot'
    },
    {
        id: '4',
        name: 'Client'
    },
    {
        id: '5',
        name: 'Bon de vente associé'
    },
    {
        id: '6',
        name: 'Etat d\'acceptation'
    },
    {
        id: '7',
        name: 'Etat bon'
    },
    {
        id: '8',
        name: 'Etat de règlement bon'
    },
    {
        id: '9',
        name: 'Utilisateur'
    }]

export const clientColumn: rowsType[] = [
    {
        id: '1',
        name: 'Client'
    },
    {
        id: '2',
        name: 'Type de client'
    },
    {
        id: '3',
        name: 'Chiffre d\'affaire'
    },
    {
        id: '4',
        name: 'Solde'
    },
    {
        id: '5',
        name: 'Etat de validation'
    },
    {
        id: '6',
        name: 'Documents associés'
    },
    {
        id: '7',
        name: 'Utilisateur'
    }]

export const prospectClientColumn: rowsType[] = [
    {
        id: '1',
        name: 'Client'
    },
    {
        id: '2',
        name: 'Type de client'
    },
    {
        id: '3',
        name: 'Etat de prospection'
    },
    {
        id: '4',
        name: 'Utilisateur'
    },
    {
        id: '5',
        name: 'Date de prospection'
    },
    {
        id: '6',
        name: 'Source client'
    }]

export const BanksColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom de la banque'
    },
    {
        id: '2',
        name: 'Code'
    },
    {
        id: '3',
        name: 'BIC'
    },
    {
        id: '4',
        name: 'Statut'
    }]

export const employeeColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet',
        sort: true,
        sortBy: 'nom'
    },
    {
        id: '2',
        name: 'Fonction'
    },
    {
        id: '3',
        name: 'Numéro de téléphone'
    },
    {
        id: '4',
        name: 'Salaire'
    },
    {
        id: '5',
        name: 'Prime Panier et Transport'
    },
    {
        id: '6',
        name: 'Actif',
        sort: true,
        sortBy: 'actif'
    },
    {
        id: '7',
        name: 'Date Début',
        sort: true,
        sortBy: 'dateDebut'
    }]

export const reglementColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet'
    },
    {
        id: '2',
        name: 'Date de début'
    },
    {
        id: '3',
        name: 'Date de fin'
    },
    {
        id: '4',
        name: 'Montant réglé'
    },
    {
        id: '5',
        name: 'Note'
    }]

export const absenceColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet'
    },
    {
        id: '2',
        name: 'Date d\'absence'
    },
    {
        id: '3',
        name: 'Motif'
    },
    {
        id: '4',
        name: 'Ajouté par'
    },
    {
        id: '5',
        name: 'Justification'
    }]

export const congeColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet'
    },
    {
        id: '2',
        name: 'Date de début'
    },
    {
        id: '3',
        name: 'Etat'
    },
    {
        id: '4',
        name: 'Nombre de jours'
    },
    {
        id: '5',
        name: 'Nombre de jours pris'
    },
    {
        id: '6',
        name: 'Nombre de jours restant'
    }]

export const congeListColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet'
    },
    {
        id: '2',
        name: 'Date de début congé'
    },
    {
        id: '3',
        name: 'Date de fin congé'
    },
    {
        id: '4',
        name: 'Nombre de jours'
    },
    {
        id: '5',
        name: 'Nombre de jours pris'
    },
    {
        id: '6',
        name: 'Type de congé'
    }]

export const pointageColumn: rowsType[] = [
    {
        id: '1',
        name: 'Date de pointage'
    },
    {
        id: '2',
        name: 'Nom complet'
    },
    {
        id: '3',
        name: 'Heures d\'arrivée'
    },
    {
        id: '4',
        name: 'Heures de départ'
    },
    {
        id: '5',
        name: 'Minutes en retard'
    }]

export const avanceSalaireColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet'
    },
    {
        id: '2',
        name: 'Date de virement'
    },
    {
        id: '3',
        name: 'Montant'
    },
    {
        id: '4',
        name: 'Motif'
    }]

export const primeMotivationColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet'
    },
    {
        id: '2',
        name: 'Date'
    },
    {
        id: '3',
        name: 'Montant'
    },
    {
        id: '4',
        name: 'Motif'
    }]

export const PretSocialColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet'
    },
    {
        id: '2',
        name: 'Date de prise'
    },
    {
        id: '3',
        name: 'Date de fin'
    },
    {
        id: '4',
        name: 'Nombre de Mois'
    },
    {
        id: '5',
        name: 'Montant Total'
    },
    {
        id: '6',
        name: 'Montant Mensuel'
    }]

export const HoursColumn: rowsType[] = [
    {
        id: '1',
        name: 'Nom complet'
    },
    {
        id: '2',
        name: 'Date'
    },
    {
        id: '3',
        name: 'Heures supplémentaires'
    },
    {
        id: '4',
        name: 'Motif'
    },
    {
        id: '5',
        name: 'Ajouté par'
    },
    {
        id: '6',
        name: 'Etat de validation'
    }]

export const FournisseurColumn: rowsType[] = [
    {
        id: '1',
        name: '#'
    },
    {
        id: '2',
        name: 'Fournisseur'
    },
    {
        id: '3',
        name: 'Adresse'
    },
    {
        id: '4',
        name: 'Type de fournisseur'
    }]

export const StatusOptions: rowsType[] = [
    {
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
    }]

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
    }]
export const entropsRowsTable: rowsType[] = [
    {
        id: '1',
        name: 'Libellé',
        sort: false
    },
    {
        id: '2',
        name: 'Adresse',
        sort: false
    }]

export const entropsRows = [
    {
        id: '1',
        name: {name: "Libellé"},
        sort: false
    },
    {
        id: '2',
        name: {ville: "Adresse"},
        sort: false
    }]


export const bonEntreeColumn:rowsType[]=[

  {
    id: '1',
    name: 'IdBon'
  },

  {
    id: '2',
    name: 'Date Bon'
  },

  {
    id: '3',
    name: 'Entrepot'
  },

  {
    id: '4',
    name: 'Fournisseur'
  },

  {
    id: '5',
    name: 'Utilisateur'
  }]

export const bonTransfertColumn:rowsType[]=[
  {
    id: '1',
    name: 'IdBon'
  },

  {
    id: '2',
    name: 'Date Bon'
  },

  {
    id: '3',
    name: 'Entrepot Départ'
  },

  {
    id: '4',
    name: 'Entrepot Arrivé'
  },

  {
    id: '5',
    name: 'Utilisateur'
  }]

export const keyMapEntrepot = {
    id: "id",
    name: "Désignation",
    location: "Location",
};

export const keyMapBonEntreeProduct = {
  idBon:"IdBon",
  dateBon : "Date Bon",
  entrepot_name : "Entrepot",
  "fournisseur.acronym" : "Fournisseur",
  username : "Utilisateur",
  produits: "produits",
  unitprice:"Prix unitaire"
};

export const keyMapVerificationStock = {
      reference: "Référence",
      name:"Désignation",
      entrepot:"Entrepot",
      quantity_entered:"Qté entrée",
      quantity_pc:"Qté Pc",
      quantity_received:"Qté reçu",
      quantity_transfered:"Qté transféré",
      quantity_util_production:"Qté en BP",
      quantity_sold:"Qté vendu",
      quantity_returned:"Qté retour",
      quantity_inreal:"Qté actuelle",
      quantity_expected:"Qté réelle",
      quantity:"Quantité"
};

export const keyMapBonTransfertProduct = {
  idBon:"IDBon",
  dateBon : "Date Bon",
  entrepot_depart: "Entrepot départ",
  entrepot_arrive : "Entrepot arrivé",
  user : "Utilisateur",
  produits: "produits",
};

export const keyMapPrix = {
    name: "Désignation",
    quantity_globale: "Quantité",
    PrixConseillé: "Prix Conseillé TTC",
    PrixRevendeur: "Prix Revendeur TTC"
};


export const keyMapCategory = {
    Libellé: "Libéllé",
    pc_component: "Composant associé",
    typefamilly: "Type",
    numbre_produit: "Nombre de produits",
    store: "store"
};

export const keyMapCloture = {
  date: "Date d'introduction",
  username: "Utilisateur",
  montant:"Montant Introduit",
  totalprice_sum :"Montant Totale des bons de vente",  
  total_verssemens:"Total Versements",
  totalremise :"Remise Totale des bons de vente",
  totalRembourse:"Montant Totale Retorur",
  totalprix_encaisse:"Montant encaissé",
  etat_cloture :"Etat de clôture"
};


export const keyMapStock = {
    name: "Libellé",
    ville: "Adresse",
};

export const keyMapProduct = {
    reference: "Référence",
    name: "Désignation",
    quantity_globale: 'Quantité',
    prix_livraison: 'PV TTC -P-',
    prix_achat: 'PV TTC -R-',
};

export const keyMapClient = {
    name: "Client",
    "categorie_client.type_desc": 'Type de client',
    name_user: "Utilisateur",
    NifDoc: "NIF",
    RCDoc: "RC",
    NisDoc: "NIS",
    valide: "Etat de validation",
    total_amount: 'Chiffre d\'affaire'
};

export const keyMapProspectClient = {
    "client.name": "Client",
    "client.categorie_client.type_desc": "Type de client",
    "etatProspection": "Etat de prospection",
    "client.name_user": "Utilisateur",
    "client.categorie_client.dateCreation": "Date de prospection",
    "SourceClient": "Source client"
};

export const keyMapBanks = {
    nom: 'Nom de la banque',
    code: 'Code',
    bic: 'BIC',
    actif: 'Statut',
}

export const keyMapNotes = {
    idBon: "N° bon",
    dateBon: "Date bon",
    "entrepot.name": "Entrepot bon",
    "client.name": "Client",
    agenceLivraison: 'Livraison',
    "client.name_user": "Commercial",
    valide: 'Validation',
    produits: 'produits',
    total_price: 'total_price',
    Remise: 'Remise',
    fraisLivraison: 'fraisLivraison',
    total_avoir: 'total_avoir',
    total_soldprice: 'total_soldprice',
};

export const KeyMapDevis = {
 idBon: 'N° bon',
 dateBon: 'Date bon',
 'client.name': 'Client',
 'user.username': 'utilisateur',
 'produits': 'produits',
};

export const keyMapFacterur = {
    codeFacture: 'N° facture',
    date_facture: 'Date facture',
    'client.name': 'Client',
    'BonS.idBon': 'Bon de livraison associé',
    etat_reglement: "Etat de règlement",
    'BonS.produits': 'produits',
    'BonS.total_price': 'total_price',
    'BonS.Remise': 'Remise',
    'BonS.fraisLivraison': 'fraisLivraison',
    'BonS.total_avoir': 'total_avoir',
    'BonS.total_soldprice': 'total_soldprice',
};

export const keyMapReturn = {
    idBon: "N° bon",
    dateBon: "Date bon",
    client: "Client",
    idbon_livraison: "Bon de vente associé",
    "user.username": "Utilisateur",
    produits: 'produits',
    totalPrice: 'totalPrice',
    total_price_retour: 'total_price_retour',
    reception_valide: 'Etat d\'acceptation',
    valide: 'Etat bon',
    etat_reglement: 'Etat de règlement bon'
};

export const keyMapEmployees = {
    "nom": "Nom complet",
    "fonction": "Fonction",
    "phone": "Numéro de téléphone",
    "salaire": "Salaire",
    "prime_espece": "Prime Panier et Transport",
    "actif": "Actif",
    "dateDebut": "Date Début"
};

export const keyMapListConge = {
    "salarie.nom": 'Nom complet',
    dateDebut: 'Date de début congé',
    dateFin: 'Date de fin congé',
    NbrJour: 'Nombre de jours',
    nbrJourPris: 'Nombre de jours pris',
    type_conge: 'Type de congé'
};

export const keyMapEtatConge = {
    "salarie.nom": 'Nom complet',
    dateDebut: 'Date de début',
    "salarie.actif": 'Etat',
    NbrJour: 'Nombre de jours',
    nbrJourPris: 'Nombre de jours pris',
};

export const keyMapAbsence = {
    "salarie.nom": 'Nom complet',
    date: 'Date d\'absence',
    motif: 'Motif',
    "user.username": 'Ajouté par',
    justifie: 'Justification'
};

export const keyMapReglement = {
    "salarie.nom": 'Nom complet',
    "salarie.dateDebut": 'Date de début',
    dateSortie: 'Date de fin',
    montant: 'Montant réglé',
    note: 'Note'
};

export const keyMapAvanceSalaire = {
    "salarie.nom": 'Nom complet',
    date: 'Date de virement',
    montant: 'Montant',
    motif: 'Motif'
};

export const keyMapPointage = {
    date: 'Date de pointage',
    "salarie.nom": 'Nom complet',
    temps_arrive: 'Heures d\'arrivée',
    temps_depart: 'Heures de départ',
};

export const keyMapPrimeMotivation = {
    "salarie.nom": 'Nom complet',
    date: 'Date',
    montant: 'Montant',
    motif: 'Motif'
};

export const keyMapPretSocial = {
    "salarie.nom": 'Nom complet',
    date: 'Date de prise',
    end_month: 'Date de fin',
    nombre_months: 'Nombre de Mois',
    montanttotal: 'Montant Total',
    montantperMonth: 'Montant Mensuel',
    motif: 'Motif'
};

export const keyMapHours = {
    "salarie.nom": 'Nom complet',
    datetimedeb: 'Date',
    nombre_heure: 'Heures supplémentaires',
    motif: 'Motif',
    "user.username": 'Ajouté par',
    valide: 'Etat de validation'
};

export const statusColors: Record<"Active" | "Pending" | "Paused", string> = {
    Active: "bg-green-500",
    Pending: "bg-yellow-500",
    Paused: "bg-red-500",
};

export const bill = {
    orderNumber: 0,
    orderDate: new Date(),
    AssociatedPurchaseOrder: '',
    warehouse: '',
    Note: '',
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

export const status: Column[] = [{id: '1', name: 'banque'}, {id: '2', name: 'CPP'}]

export const defaultValuesSignIn: Record<string, any> = {
    username: "",
    password: "",
};

