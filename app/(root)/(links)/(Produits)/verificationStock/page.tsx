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
    setSearch
  } = useFiltersContext();

  const { isLoading, data: verificationStockData } = useQuery({
    queryKey: ["verificationStock"],
    queryFn: getVerificationStock,
  });

  const transformedData= transformNestedData(verificationStockData, keyMapVerificationStock)

  return (
     <section className="page-design">
          <h1 className="text-4xl font-bold p-2">Vérification de Stock</h1>
           <DataTable
                 columnNames={verificationStockColumn}
                 columnData={transformedData}
                 isLoading={isLoading}
                // setSearch={setSearch}
                // setCategory={setCategory}
                // currentPage={page}
                // setCurrentPage={setPage}
                // totalPages={totalPages}
                // categories={categories}
                // isLoading={isLoading}
                // startDate={startDate}
                // setStartDate={setStartDate}
                // endDate={endDate}
                // setEndDate={setEndDate}

              />
        </section>
  )
}

export default Page
