import { CardProps, SalesProps } from "@/types";
import { Users, SquareArrowLeft,BadgePercent,Truck } from "lucide-react";

export const sidebarLinks = [
  {
    imgURL: '/icons/company.svg',
    route: [
      {
        name: 'Divatech',
        link: '/divatech',
      },
      {
        name: 'Mag54',
        link: '/mag54',
      },
      {
        name: 'Local 1095',
        link: '/local1095',
      },
      {
        name: 'Local 958',
        link: '/local958',
      },
      {
        name: 'Entrepôt Reghaia',
        link: '/entrepotReghaia',
      },
      {
        name: 'Gaming zone - Park mall',
        link: '/gammingZoneParkMall',
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
  {
    imgURL: '/icons/buy.svg',
    route: [
      {
        name: 'Bons de commandes',
        link: '/bonsCommandes',
      },
      {
        name: 'Bons de livraison',
        link: '/bonsLivraisonAchat',
      },
      {
        name: 'Dossiers d' + "'" + 'achat',
        link: '/dossiersAchat',
      },
      {
        name: 'Bons de réception',
        link: '/bonsReception',
      },
      {
        name: 'Expéditions',
        link: '/expeditions',
      },
      {
        name: 'Avoirs',
        link: '/avoirs',
      },
      {
        name: 'Factures',
        link: '/factures',
      },
      {
        name: 'Liste des projets',
        link: '/listeProjets',
      },
      {
        name: 'Crédit de note',
        link: '/creditNote',
      },
    ],
    label: 'Achat',
  },
  {
    imgURL: '/icons/sell.svg',
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
        name: 'Bons de livraison modifiés',
        link: '/bonsLivraisonModifies',
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

      {
        name: 'Factures',
        link: '/facturesVente',
      },
      {
        name: 'Avoirs',
        link: '/avoirsVente',
      },
    ],
    label: 'Vente',
  },
  {
    imgURL: '/icons/money-send.svg',
    route: [
      {
        name: 'Préparation code série',
        link: '/preparationCodeSerie',
      },
      {
        name: 'Requêtes des clients',
        link: '/requetesClients',
      },
      {
        name: 'Fiches de livraisons',
        link: '/fichestLivraisons',
      },
      {
        name: 'Affectation des course de livraison',
        link: '/affectationCourseLivraison',
      },
      {
        name: 'Tracking des courses de livraison',
        link: '/trackingCourseLivraison',
      },
      {
        name: 'Moyen de transport',
        link: '/moyenTransport',
      },
      {
        name: 'Bons de transport',
        link: '/bonsTransport',
      },
      {
        name: 'Bons non préparés',
        link: '/bonsNonPrepares',
      },
    ],
    label: 'Logistique',
  },
  {
    imgURL: '/icons/payment.svg',
    route: [
      {
        name: 'Situations des règlements clients',
        link: '/situationReglementsClients',
      },
      {
        name: 'Etats des reglements factures',
        link: '/etatReglementsFactures',
      },
      {
        name: 'Reglements des factures clients',
        link: '/reglementsFacturesClients',
      },
      {
        name: 'Etats de réglements bons de livraisons',
        link: '/etatReglementsBonsLivraison',
      },
      {
        name: 'Historique des montants récupérés',
        link: '/historiqueMontantsRecuperes',
      },
      {
        name: 'Réglemets des bons de livraisons',
        link: '/reglementsBonsLivraison',
      },
      {
        name: 'Etat des réglements des factures fournisseurs',
        link: '/etatReglementsFacturesFournisseurs',
      },
      {
        name: 'Etat des réglements bons de livraisons fournisseurs',
        link: '/etatReglementsBonsLivraisonFournisseurs',
      },
      {
        name: 'Réglements fournisseurs',
        link: '/reglementsFournisseurs',
      },
      {
        name: 'Etat de la trésorerie',
        link: '/etatTresorerie',
      },
      {
        name: 'Mouvements des caisses',
        link: '/mouvementsCaisses',
      },
      {
        name: 'Emprunts et dettes',
        link: '/empreintsDettes',
      },
      {
        name: 'Clotûres',
        link: '/clotures',
      },
      {
        name: 'Régelements collectés',
        link: '/reglementsCollectes',
      },
    ],
    label: 'Règlement',
  },
  {
    imgURL: '/icons/goal.svg',
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
        name: 'Régions clients',
        link: '/regionsClients',
      },
      {
        name: 'Prévisions',
        link: '/previsions',
      },
    ],
    label: 'Objectif',
  },
  {
    imgURL: '/icons/statistic.svg',
    route: [
      {
        name: 'Clients',
        link: '/clientsStatistiques',
      },
      {
        name: 'Clients / Produits',
        link: '/cleintsProduits',
      },
      {
        name: 'Chiffre d' + "'" + 'affaires / Marges',
        link: '/chiffreAffairesMarges',
      },
      {
        name: 'Etat 104',
        link: '/etat104',
      },
      {
        name: 'Fournisseurs',
        link: '/fourisseursStatistiques',
      },
    ],
    label: 'Statistique',
  },
  {
    imgURL: '/icons/production.svg',
    route: [
      {
        name: 'Ordres de fabrications',
        link: '/ordresFabrications',
      },
    ],
    label: 'Production',
  },
  {
    imgURL: '/icons/administration.svg',
    route: [
      {
        name: 'Salariés',
        link: '/salaries',
      },
      {
        name: 'Contrats',
        link: '/contrats',
      },
      {
        name: 'Historique Réglements des comptes',
        link: '/historiqueReglementsComptes',
      },
      {
        name: 'Jours Absences',
        link: '/joursAbsences',
      },
      {
        name: 'Listes des congés',
        link: '/listeConges',
      },
      {
        name: 'Situations des congés',
        link: '/situationConges',
      },
      {
        name: 'Liste de pointages',
        link: '/listePointages',
      },
      {
        name: 'Avances sur salaires',
        link: '/avancessalaires',
      },
      {
        name: 'Mise à pied',
        link: '/miseAPied',
      },
      {
        name: 'Prime de don',
        link: '/primeDon',
      },
      {
        name: 'Primes fixes',
        link: '/primeFixes',
      },
      {
        name: 'Prêts sociaux',
        link: '/pretsSociaux',
      },
      {
        name: 'Heures supplémentaires',
        link: '/heuresSupplementaires',
      },
      {
        name: 'Etat de paie',
        link: '/etatPaie',
      },
      {
        name: 'Situation des salariés',
        link: '/situationSalaries',
      },
      {
        name: 'Etat de paie commercial',
        link: '/etatPaieCommercial',
      },
      {
        name: 'Etat réglements de salaires',
        link: '/etatReglementsSalaires',
      },
      {
        name: 'Liste des dépenses',
        link: '/listeDepenses',
      },
    ],
    label: 'Administration',
  },
  {
    imgURL: '/icons/archives.svg',
    route: [
      {
        name: 'Ordres de fabrications',
        link: '/ordresFabrications',
      },
    ],
    label: 'Production',
  },
  {
    imgURL: '/icons/administration.svg',
    route: [
      {
        name: 'Salariés',
        link: '/salariesArchives',
      },
      {
        name: 'Contrats',
        link: '/contratsArchives',
      },
      {
        name: 'Historique Réglements des comptes',
        link: '/historiqueReglementsComptesArchives',
      },
      {
        name: 'Jours Absences',
        link: '/joursAbsencesArchives',
      },
      {
        name: 'Listes des congés',
        link: '/listeCongesArchives',
      },
      {
        name: 'Situations des congés',
        link: '/situationCongesArchives',
      },
      {
        name: 'Liste de pointages',
        link: '/listePointagesArchives',
      },
      {
        name: 'Avances sur salaires',
        link: '/avancessalairesArchives',
      },
      {
        name: 'Mise à pied',
        link: '/miseAPiedArchives',
      },
      {
        name: 'Prime de don',
        link: '/primeDonArchives',
      },
      {
        name: 'Primes fixes',
        link: '/primeFixesArchives',
      },
      {
        name: 'Prêts sociaux',
        link: '/pretsSociauxArchives',
      },
      {
        name: 'Heures supplémentaires',
        link: '/heuresSupplementairesArchives',
      },
      {
        name: 'Etat de paie',
        link: '/etatPaieArchives',
      },
      {
        name: 'Situation des salariés',
        link: '/situationSalariesArchives',
      },
      {
        name: 'Etat de paie commercial',
        link: '/etatPaieCommercialArchives',
      },
      {
        name: 'Etat réglements de salaires',
        link: '/etatReglementsSalairesArchives',
      },
      {
        name: 'Liste des dépenses',
        link: '/listeDepensesArchives',
      },
      {
        name: 'Loyers location',
        link: '/loyersLocationArchives',
      },
      {
        name: 'Loyers Entretien',
        link: '/loyersEntretienArchives',
      },
      {
        name: 'Moyen généraux exploitation',
        link: '/moyenGenerauxExploitationArchives',
      },
      {
        name: 'Moyen généraux entretien',
        link: '/moyenGenerauxEntretienArchives',
      },
      {
        name: 'Change Devise',
        link: '/changeDeviseArchives',
      },
      {
        name: 'Calendrier charges',
        link: '/calendrierChargesArchives',
      },
    ],
    label: 'Archives',
  },
];

export enum AuthType {
  SignIn = 'sign-in',
  SignUp = 'sign-up',
}

  ]
  export enum QuantityLabels {
    Sold = 'Quantity Sold',
    ForSale = 'Quantity For Sale',
    Available = 'Quantity Available'
  }
  export const cardData: CardProps[] = [
    {
      label: "Total Bon de Vente",
      amount: "45,231.89",
      description: "+20.1% from last month",
      icon: BadgePercent,
      color:'text-success-600'
    },
    {
      label: "Total Bon de Livraison",
      amount: "+2350",
      description: "+180.1% from last month",
      icon: Truck,
      color:'text-orange-600'
    },
    {
      label: "Total Bon de Retour",
      amount: "+12,234",
      description: "+19% from last month",
      icon: SquareArrowLeft,
      color:'text-blue-600'
    },
    {
      label: "Base Clientèle",
      amount: "+573",
      description: "+201 from last month",
      icon: Users,
      color:'text-red-600'
    }
  ]
  export const userSalesData: SalesProps[] = [
    {
      name: "Olivia Martin",
      email: "olivia.martin@email.com",
      salesAmount: "+$1,999.00"
    },
    {
      name: "Jackson Lee",
      email: "isabella.nguyen@email.com",
      salesAmount: "+$1,999.00"
    },
    {
      name: "Isabella Nguyen",
      email: "isabella.nguyen@email.com",
      salesAmount: "+$39.00"
    },
    {
      name: "William Kim",
      email: "will@email.com",
      salesAmount: "+$299.00"
    },
    {
      name: "Sofia Davis",
      email: "sofia.davis@email.com",
      salesAmount: "+$39.00"
    }
  ];

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

