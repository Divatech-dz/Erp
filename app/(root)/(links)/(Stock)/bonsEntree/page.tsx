'use client'

import { DataTable } from '@/components/data-table';
import { bonEntreeColumn, keyMapBonEntreeProduct } from '@/constants';
import { useFiltersContext } from '@/lib/context/Filters';
import { getBonEntree } from '@/service/bonEntreeService';
import { useQuery } from '@tanstack/react-query';
import { transformNestedData } from "@/lib/utils";
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
          setEntrepot,
          fournisseurs,
          fournisseurId,
          setFournisseurId
      } = useFiltersContext();


      const { isLoading, data: bonEntreeData } = useQuery({
        queryKey: [page, search,startDate,endDate,fournisseurId,entrepot],
        queryFn: getBonEntree,
      });
    
      const resultsBonEntree = bonEntreeData?.results;
      const totalPages = bonEntreeData?.total_pages;
      const transformedData= transformNestedData(resultsBonEntree, keyMapBonEntreeProduct)
      const bonEntreeDataFilter=transformedData?.filter((data)=> data.Utilisateur !== "afifa_arg")

      console.log("fournisseurs",fournisseurs);
      
   
  return (
    <section className="page-design">
        <h1 className="text-4xl font-bold p-2">Bons d'entrées</h1>
        <DataTable
          columnNames={bonEntreeColumn}
          columnData={bonEntreeDataFilter}
      
          setFournisseurId={setFournisseurId}
          fournisseurs={fournisseurs}
          entrepots={entrepots}
          setEntrepot={setEntrepot}
          setSearch={setSearch} 
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={totalPages}
          setUserId={setUserId}
          isLoading={isLoading}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate} 
          setEndDate={setEndDate}
        />
      </section>

  );
}

export default Page;
