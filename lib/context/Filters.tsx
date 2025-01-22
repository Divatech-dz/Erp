'use client'

import React, { createContext, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "@/service/userListService";
import { getCategory } from "@/service/categoryService";
import { getCaisse } from '@/service/caisseService';
import { getFournisseur } from '@/service/fournisseurService';
import { getEntrepot } from '@/service/entrepotService';

interface FiltersContextType {
  salesUsers: any;
  commercials: any;
  categories: any;
  caisses: any;
  fournisseurs:any;
  entrepots:any;
  page: number;
  entrepot:number,
  setEntrepot: (value: number | ((prevState: number) => number)) => void,
  setPage: (value: number | ((prevState: number) => number)) => void,
  search: string;
  setSearch: (value: string | ((prevState: string) => string)) => void,
  category: number;
  setCategory: (value: number | ((prevState: number) => number)) => void,
  startDate: string;
  setStartDate: (value: string) => void;
  endDate: string;
  setEndDate: (value: string) => void;
  clientType: string;
  setClientType: (value: string | ((prevState: string) => string)) => void,
  userId: number;
  setUserId: (value: number | ((prevState: number) => number)) => void,
  caisseId:number,
  setCaisseId: (value: number | ((prevState: number) => number)) => void,
  fournisseur: number;
  setFournisseur: (value: number | ((prevState: number) => number)) => void,
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState(1);
  const [entrepot, setEntrepot] = useState(0);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(0);
  const [fournisseur, setFournisseur] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [clientType, setClientType] = useState('');
  const [userId, setUserId] = useState(0);
  const [caisseId, setCaisseId] = useState(0);

  const { data: userListData } = useQuery({
    queryKey: ['userList'],
    queryFn: getUsersList
  })

  const { data: categoryData } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory
  });

    const { data: caisseData } = useQuery({
    queryKey: [page, search],
    queryFn: getCaisse
  });

  const { data: fournisseurData } = useQuery({
    queryKey: ['fournisseur'],
    queryFn: getFournisseur
  });

  const { data: entrepotData } = useQuery({
    queryKey: ['entrepot'],
    queryFn: getEntrepot
  });


  // console.log(
  //   categoryData
  // );

 


  const salesUsers = userListData?.filter((user: any) => user?.role === 'commercial' || user?.role === 'Vendeuse');
  const commercials = userListData?.filter((user: any) => user?.role === 'commercial');

  const categories = categoryData?.map((cat: any) => ({ id: cat.id, category: cat.Libellé }));

  const caisses = caisseData?.results?.map((caisse: any) => ({ id: caisse.id, caisse: caisse.Libellé }));
  const fournisseurs = fournisseurData?.map((fournisseur: any) => ({ id: fournisseur.id, fournisseur: fournisseur.acronym }));
  const entrepots = entrepotData?.results?.map((entrepot: any) => ({ id: entrepot.id, entrepot: entrepot.name }));

  console.log(
    "entrepots",
    entrepots
  );

    
  console.log(
    "fournisseurs", fournisseurs
   );
 

  return (
    <FiltersContext.Provider
      value={{
        salesUsers,
        commercials,
        categories,
        fournisseurs,
        entrepots,
        page,
        setPage,
        search,
        setSearch,
        category,
        setCategory,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        clientType,
        setClientType,
        userId,
        setUserId,
        entrepot,
        setEntrepot,
        caisses,
        setCaisseId,
        caisseId,
        fournisseur,
        setFournisseur,
       
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = React.useContext(FiltersContext);
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};