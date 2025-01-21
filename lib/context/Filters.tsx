'use client'

import React, { createContext, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "@/service/userListService";
import { getCategory } from "@/service/categoryService";
import { getCaisse } from '@/service/caisseService';

interface FiltersContextType {
  salesUsers: any;
  commercials: any;
  categories: any;
  caisses: any;
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
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPage] = useState(1);
  const [entrepot, setEntrepot] = useState(11);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(0);
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
  })

  const salesUsers = userListData?.filter((user: any) => user?.role === 'commercial' || user?.role === 'Vendeuse');
  const commercials = userListData?.filter((user: any) => user?.role === 'commercial');

  const categories = categoryData?.map((cat: any) => ({ id: cat.id, category: cat.Libellé }));

  const caisses = caisseData?.results?.map((caisse: any) => ({ id: caisse.id, caisse: caisse.Libellé }));

  return (
    <FiltersContext.Provider
      value={{
        salesUsers,
        commercials,
        categories,
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