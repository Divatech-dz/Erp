'use client'

import { DataTable } from '@/components/data-table';
import { bonTransfertColumn, keyMapBonTransfertProduct } from '@/constants';
import { useFiltersContext } from '@/lib/context/Filters';
import { transformNestedData } from '@/lib/utils';
import { getBonTransfert } from '@/service/bonTransfertService';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

function Page() {
  const {
    page,
    setPage,
    search,
    setSearch,
    userId,
    setUserId,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    entrepot,
    entrepots,
    setEntrepotDepart,
    setEntrepotArrive
} = useFiltersContext();

const { isLoading, data: bonTransfertData } = useQuery({
  queryKey: [page, search,startDate,endDate,entrepot],
  queryFn: getBonTransfert,
});

const resultsBonTransfert = bonTransfertData?.results;
const totalPages = bonTransfertData?.total_pages;
const transformedData= transformNestedData(resultsBonTransfert, keyMapBonTransfertProduct)

    return (
      <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Bons de transferts</h1>

       <DataTable
         columnNames={bonTransfertColumn}
         setSearch={setSearch} 
         columnData={transformedData}
         currentPage={page}
         isLoading={isLoading}
         setEntrepotDepart={setEntrepotArrive}
         setEntrepotArrive={setEntrepotDepart}
         entrepots={entrepots}
         />
       </section> 
    );
}

export default Page;