'use client'

import React, { createContext, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "@/service/userListService";
import { getCategory } from "@/service/categoryService";
import { getCaisse } from '@/service/caisseService';
import { getMarque } from '@/service/marqueService';
import { getEntrepot } from '@/service/entrepotService';

interface FiltersContextType {
  salesUsers: any;
  commercials: any;
  categories: any;
  caisses: any;
  marques:any;
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
  marque: number;
  setMarque: (value: number | ((prevState: number) => number)) => void,
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState(1);
  const [entrepot, setEntrepot] = useState(11);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(0);
  const [marque, setMarque] = useState(0);
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

  const { data: marqueData } = useQuery({
    queryKey: ['marque'],
    queryFn: getMarque
  });

  const { data: entrepotData } = useQuery({
    queryKey: ['entrepot'],
    queryFn: getEntrepot
  });


  console.log(
    categoryData
  );

  console.log(
    marqueData
  );

  console.log(
    entrepotData
  );


  const salesUsers = userListData?.filter((user: any) => user?.role === 'commercial' || user?.role === 'Vendeuse');
  const commercials = userListData?.filter((user: any) => user?.role === 'commercial' || user?.role === 'commercial-vente' || user?.role === 'manager');
  const categories = categoryData?.map((cat: any) => ({ id: cat.id, category: cat.Libellé }));
  const caisses = caisseData?.results?.map((caisse: any) => ({ id: caisse.id, caisse: caisse.Libellé }));
  const marques = marqueData?.results?.map((marque: any) => ({ id: marque.id, marque: marque.acronym }));
  const entrepots = entrepotData?.results?.map((entrepot: any) => ({ id: entrepot.id, entrepot: entrepot.name }));

  return (
    <FiltersContext.Provider
      value={{
        salesUsers,
        commercials,
        categories,
        marques,
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
        marque,
        setMarque,
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