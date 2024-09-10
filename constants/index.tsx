export const sidebarLinks = [
    {
      imgURL: '/icons/home.svg',
      route: '/',
      label: 'Home',
    },
    {
      imgURL: '/icons/dollar-circle.svg',
      route: '/my-banks',
      label: 'My Accounts',
    },
    {
      imgURL: '/icons/transaction.svg',
      route: '/transaction-history',
      label: 'Transaction History',
    },
    {
      imgURL: '/icons/money-send.svg',
      route: '/payment-transfer',
      label: 'Transfer Funds',
    },
  ];

  export enum AuthType {
    SignIn = 'sign-in',
    SignUp = 'sign-up',
  }