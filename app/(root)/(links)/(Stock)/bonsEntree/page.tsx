'use client'

import { DataTable } from '@/components/data-table';
import { bonEntreeColumn, keyMapBonEntreeProduct } from '@/constants';
import { useFiltersContext } from '@/lib/context/Filters';
import { getBonEntree } from '@/service/bonEntreeService';
import { useQuery } from '@tanstack/react-query';
import { transformNestedData } from "@/lib/utils";
import React from 'react';

const page = () => {

     const {
          page,
          setPage,
          search,
          setSearch,
          userId,
          setUserId,
          caisseId,
          setCaisseId,
          startDate,
          endDate,
          entrepot,
          entrepots,
          setEntrepot,
          marque,
          marques,
          setMarque
      } = useFiltersContext();


      const { isLoading, data: clotureData } = useQuery({
        queryKey: [page, search,startDate,endDate,marque,entrepot],
        queryFn: getBonEntree,
      });
    
    
      
        const resultsCloture = clotureData?.results;
        const totalPages = clotureData?.total_pages;
    
        
      const transformedData= transformNestedData(resultsCloture, keyMapBonEntreeProduct)
      console.log(resultsCloture)
    
  
  return (
  
    <section className="page-design">
        <h1 className="text-4xl font-bold p-2">Bons d'entrées</h1>
  
        <DataTable
          marques={marques}
          setMarque={setMarque}
          entrepots={entrepots}
          setEntrepot={setEntrepot}
          columnNames={bonEntreeColumn}
          setSearch={setSearch} 
          columnData={transformedData}
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={totalPages}
          setCaisse={setCaisseId}
         setUserId={setUserId}
          isLoading={isLoading}
        />
      </section>

  );
}

export default page;
