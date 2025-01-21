'use client'

import { DataTable } from '@/components/data-table';
import { verificationStockColumn } from '@/constants';
import { useFiltersContext } from '@/lib/context/Filters';
import React from 'react'

const page = () => {


 const {
    page,
    setPage,
    search,
    setSearch,
    marques,
    marque,
    setMarque,
    entrepots,
    entrepot,
    setEntrepot,
    
  
  } = useFiltersContext();




  // FAIRE LA FONCTION GET VERIFICATION SERVICE

  









  return (
     <section className="page-design">
          <h1 className="text-4xl font-bold p-2">Vérification de Stock</h1>
           <DataTable
                 columnNames={verificationStockColumn}
                // setSearch={setSearch}
                // setCategory={setCategory}
                // columnData={transformedEtatStock}
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

export default page
