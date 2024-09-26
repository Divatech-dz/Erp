import { CardProps, SalesProps } from "@/types";
import { Users, SquareArrowLeft,BadgePercent,Truck } from "lucide-react";

export const sidebarLinks = [
    {
      imgURL: '/icons/home.svg',
      route: '/',
      label: 'Home',
    },
    {
      imgURL: '/icons/dollar-circle.svg',
      route: '/Enterprise',
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
    {
      imgURL: '/icons/home.svg',
      route: '/Comptoire',
      label: 'Comptoire',
    },
    {
      imgURL: '/icons/dollar-circle.svg',
      route: '/Achats',
      label: 'Achats',
    },
    {
      imgURL: '/icons/transaction.svg',
      route: '/Vente',
      label: 'Vente',
    },
    {
      imgURL: '/icons/money-send.svg',
      route: '/Logistiques',
      label: 'Logistiques',
    },
    {
      imgURL: '/icons/transaction.svg',
      route: '/Reglement',
      label: 'Reglement',
    },
    {
      imgURL: '/icons/money-send.svg',
      route: '/Target',
      label: 'Target',
    },
    {
      imgURL: '/icons/money-send.svg',
      route: '/Statistics',
      label: 'Statistics',
    },
    {
      imgURL: '/icons/transaction.svg',
      route: '/transaction-history',
      label: 'Administration',
    },
    {
      imgURL: '/icons/money-send.svg',
      route: '/Archives',
      label: 'Archives',
    },
    
  ];

  export enum AuthType {
    SignIn = 'sign-in',
    SignUp = 'sign-up',
  }

  export const infoCard=[
    {
      name:'CPU',
      total:23455,
    },
    {
      name:'MB',
      total:23455,
    },
    {
      name:'CPUC',
      total:23455,
    },
    {
      name:'SSD',
      total:23455,
    },
    {
      name:'PSU',
      total:23455,
    },
    {
      name:'PSU',
      total:23455,
    },
    {
      name:'GPU',
      total:23455,
    },
    {
      name:'CASE',
      total:23455,
    },
    {
      name:'CASEF',
      total:23455,
    },
    {
      name:'CASEF',
      total:23455,
    },
    {
      name:'Monitor',
      total:23455,
    },
    {
      name:'clavier',
      total:23455,
    },


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