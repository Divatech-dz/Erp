'use client'

import { DataTable } from '@/components/data-table';
import { keyMapVerificationStock, verificationStockColumn } from '@/constants';
import { useFiltersContext } from '@/lib/context/Filters';
import { transformNestedData } from '@/lib/utils';
import { getVerificationStock } from '@/service/verificationStockService';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

function Page(){

 const {
    page,
    setPage,
    search,
    setSearch,
    categories,
    setCategory,
    category,
    entrepots,
    entrepot,
    setEntrepot,
    
  } = useFiltersContext();

  const { isLoading, data: verificationStockData } = useQuery({
    queryKey: [page, category,entrepot],
    queryFn: getVerificationStock,
  });

  const resultsVerificationStock = verificationStockData?.results;
  const transformedData= transformNestedData(resultsVerificationStock, keyMapVerificationStock)

  const totalPages = verificationStockData?.total_pages || 0;


  return (
     <section className="page-design">
          <h1 className="text-4xl font-bold p-2">Vérification de Stock</h1>
           <DataTable
                 columnNames={verificationStockColumn}
                 columnData={transformedData}
                 isLoading={isLoading}
                 currentPage={page}
                 setCurrentPage={setPage}
                 totalPages={totalPages}
                 categories={categories}
                 setCategory={setCategory}
                 setEntrepot={setEntrepot}
                 entrepots={entrepots}
             
              />
        </section>
  )
}

export default Page
