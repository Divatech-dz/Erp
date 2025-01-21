'use client';

import { DataTable } from "@/components/data-table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { entrepotProductColumn, keyMapEntrepotProduct } from "@/constants";
import { useFiltersContext } from "@/lib/context/Filters";
import { transformNestedData } from "@/lib/utils";
import { getEntrepot } from "@/service/entrepotService";
import { getProducts } from "@/service/productService";
import { getStock } from "@/service/stockService";
import { useQuery } from "@tanstack/react-query";
import { log } from "node:console";
import React, { useState, useMemo, useEffect } from "react";

const Page = () => {
  const {
    page,
    setPage,
    categories,
    category,
    setCategory,
    search,
    setSearch,
    entrepot,
    setEntrepot,
    
  } = useFiltersContext();


  const { data: entrepotData } = useQuery({
    queryKey: ["entrepot"],
    queryFn: getEntrepot,
  });

  const transformedEntrepots = useMemo(
    () => transformNestedData(entrepotData?.results || [], { id: "id", name: "Désignation" }),
    [entrepotData]
  );


  const {isLoading, data: stockData } = useQuery({
    queryKey: [page, search,entrepot,category],
    queryFn: getStock,
  });

  const transformedStock = useMemo(
    () => transformNestedData(stockData?.results || [], { id: "id", name: "Désignation",quantity:"Quantité",prix_achat:"Prix Revient",reference:"Référence",montant_total:"Montant" }),
    [stockData]
  );
  
  
  const totalPages = stockData?.total_pages || 0;

  console.log('transformedStock');
  console.log(transformedStock);
 



  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Répartition des produits sur les entrepôts</h1>
      <Tabs >
        
        <TabsList>
          {transformedEntrepots?.map((entrepot) => (
            <TabsTrigger
              key={entrepot.id}
              value={entrepot.id.toString()}
              onClick={() => setEntrepot(entrepot.id)} 
              className={`cursor-pointer px-4 py-2 ${
                entrepot === entrepot.id ? "font-bold" : ""
              }`}
            >
              {entrepot.Désignation}
            </TabsTrigger>




          ))}
        </TabsList>

   
          
              <DataTable
                columnNames={entrepotProductColumn}
                columnData={transformedStock}
                setSearch={setSearch}
                setCategory={setCategory}
                currentPage={page}
                setCurrentPage={setPage}
                totalPages={totalPages}
                categories={categories}
                isLoading={isLoading}
               
              />
           
      </Tabs>
    </section>
  );
}  

export default Page;
