interface Entrepot {
  id: number;
  Désignation: string;
}

interface Product {
  id: number;
  name: string;
  reference: string;
  prix_achat: number;
  entrepot: number;
}

interface EntrepotData {
  results: Entrepot[];
}

interface ProductData {
  results: Product[];
  total_pages: number;
}



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
    setEntrepot
  } = useFiltersContext();


  const { data: entrepotData } = useQuery({
    queryKey: [page, search],
    queryFn: getEntrepot,
  });

  const transformedEntrepots = useMemo(
    () => transformNestedData(entrepotData?.results || [], { id: "id", name: "Désignation" }),
    [entrepotData]
  );


  const { data: stockData } = useQuery({
    queryKey: [page, search,entrepot],
    queryFn: getStock,
  });

  const transformedStock = useMemo(
    () => transformNestedData(stockData?.results || [], { id: "id", name: "Désignation",quantity:"Quantité",prix_achat:"Prix Revient",montant_total:"Montant" }),
    [stockData]
  );
  

  console.log('transformedStock');
  console.log(transformedStock);
 

  const { data:productsData, isLoading } = useQuery({
    queryKey: [ page, search, category],
    queryFn: getProducts,
  });

  const transformedProducts = useMemo(
    () => transformNestedData(productsData?.results || [], { id: "id",name:"Désignation",prix_achat:"Prix Revient",quantity:"Quantité",stock:"stock"}),
    [productsData]
  );


      
//  const transformedProducts= transformNestedData(productsData, keyMapEntrepotProduct)
  
 // console.log("transformedProducts",transformedProducts);
  const totalPages = productsData?.total_pages || 0;


  const [entrepotActif, setEntrepotActif] = useState<number >(0);


  // const produitsFiltres = useMemo(() => {
  //   if (entrepotActif ==11 ) return transformedProducts || [];
  //   return transformedProducts?.filter((product) => product.id === 1778) || [];
  // }, [entrepotActif]);


  // const produitsFiltres = transformedProducts?.filter((p) => 
  //   p?.stock?.some((s: any) => s.entrepot === entrepotActif)
  // );
  
  // console.log('Produits filtrés :', produitsFiltres);
      




    //   const produitsFiltres = transformedProducts
    //   ?.filter((p) => p?.stock?.some((s: any) => s.entrepot === entrepotActif))
    //   ?.map((p) => {
    
    //     const filteredStock = p?.stock?.filter((s: any) => s.entrepot === entrepotActif);

      
    //     return {
    //       ...p,
    //       stock: filteredStock.map((s:any) => ({
    //         ...s,
    //         quantity: s.quantity, 
    //       })),
    //     };
    //   });

    // console.log("Produits filtrés avec les quantités :", produitsFiltres);


  

  useEffect(()=>{
    console.log('entrepotActif');
    console.log(entrepotActif);
    // console.log('produitsFiltres');
    // console.log(produitsFiltres);
  },[entrepotActif])


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
