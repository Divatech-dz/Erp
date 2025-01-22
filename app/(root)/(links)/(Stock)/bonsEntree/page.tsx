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
          setStartDate,
          setEndDate,
          entrepot,
          entrepots,
          setEntrepot,
          fournisseur,
          fournisseurs,
          setFournisseur
      } = useFiltersContext();


      const { isLoading, data: bonEntreeData } = useQuery({
        queryKey: [page, search,startDate,endDate,fournisseur,entrepot],
        queryFn: getBonEntree,
      });
    
    
      
      const resultsBonEntree = bonEntreeData?.results;
      const totalPages = bonEntreeData?.total_pages;
    
      console.log(resultsBonEntree);
      
      const transformedData= transformNestedData(resultsBonEntree, keyMapBonEntreeProduct)
      console.log("transformedData",transformedData)

      const bonEntreeDataFilter=transformedData?.filter((data)=> data.Utilisateur !== "afifa_arg")
    
      // console.log("bonEntreeDataFilter",bonEntreeDataFilter)


      

  return (
  
    <section className="page-design">
        <h1 className="text-4xl font-bold p-2">Bons d'entrées</h1>
  
        <DataTable

          columnNames={bonEntreeColumn}
          columnData={bonEntreeDataFilter}
          fournisseurs={fournisseurs}
          setFournisseur={setFournisseur}
          entrepots={entrepots}
          setEntrepot={setEntrepot}
          setSearch={setSearch} 
          currentPage={page}
          setCurrentPage={setPage}
          totalPages={totalPages}
          setCaisse={setCaisseId}
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

export default page;
