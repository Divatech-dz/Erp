'use client';

import { DataTable } from "@/components/data-table";
import {  etatStockColumn } from "@/constants";
import { useFiltersContext } from "@/lib/context/Filters";
import { transformNestedData } from "@/lib/utils";
import { getEtatStock } from "@/service/etatStockService";
import { useQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";

const Page = () => {
  const {
    page,
    setPage,
    categories,
    category,
    setCategory,
    search,
    setSearch,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useFiltersContext();


  const {isLoading, data: etatStockData } = useQuery({
    queryKey: [page,search,startDate,endDate,category],
    queryFn: getEtatStock,
  });

  const transformedEtatStock = useMemo(
    () => transformNestedData(etatStockData?.results || [], {  categorie: "MODEL TYPE",name:"MODEL NAME",reference:"PART NUMBER",start_date:"START DATE",end_date:"END DATE",initial_quantity:"INITIAL STOCK",entered_quantity:"NEW ARRIVAL",sold_quantity:"SELLOUT",final_quantity:"FINAL QUANTITY"}),
    [etatStockData]
  );
  
  const totalPages = etatStockData?.total_pages || 0;

  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Etat Stock</h1>
       <DataTable
            columnNames={etatStockColumn}
            setSearch={setSearch}
            setCategory={setCategory}
            columnData={transformedEtatStock}
            currentPage={page}
            setCurrentPage={setPage}
            totalPages={totalPages}
            categories={categories}
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
