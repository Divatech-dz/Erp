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
import { entrepotProductColumn } from "@/constants";
import { useFiltersContext } from "@/lib/context/Filters";
import { transformNestedData } from "@/lib/utils";
import { getEntrepot } from "@/service/entrepotService";
import { getProducts } from "@/service/productService";
import { useQuery } from "@tanstack/react-query";
import { log } from "node:console";
import React, { useState, useMemo } from "react";

const Page = () => {
  const {
    page,
    setPage,
    categories,
    category,
    setCategory,
    search,
    setSearch,
  } = useFiltersContext();


  const { data: entrepotData } = useQuery({
    queryKey: [page, search],
    queryFn: getEntrepot,
  });

  const transformedEntrepots = useMemo(
    () => transformNestedData(entrepotData?.results || [], { id: "id", name: "Désignation" }),
    [entrepotData]
  );

  console.log("transformedEntrepots",transformedEntrepots);
  


  const { data:productsData, isLoading } = useQuery({
    queryKey: [ page, search, category],
    queryFn: getProducts,
  });

  const transformedProducts = useMemo(
    () => transformNestedData(productsData?.results || [], { id: "id", entrepot: "entrepot" ,name:"name",prix_achat:"prix_achat",stock:"stock"}),
    [productsData]
  );

  
  console.log("transformedProducts",transformedProducts);
  const totalPages = productsData?.total_pages || 0;


  const [entrepotActif, setEntrepotActif] = useState<number | "all">("all");


  const produitsFiltres = useMemo(() => {
    if (entrepotActif === "all") return transformedProducts || [];
    return transformedProducts?.filter((product) => product.entrepot === entrepotActif) || [];
  }, [entrepotActif, transformedProducts]);

  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Répartition des produits sur les entrepôts</h1>
      <Tabs defaultValue="all">
       
      <TabsList>
          {transformedEntrepots?.map((entrepot) => (
            <TabsTrigger
              key={entrepot.id}
              value={entrepot.Désignation}
              onClick={() => setEntrepotActif(entrepot)}
              className={`cursor-pointer px-4 py-2 ${
                entrepotActif === entrepot.id ? "font-bold" : ""
              }`}
            >
              {entrepot.Désignation}
            </TabsTrigger>
          ))}
        </TabsList>
       
       

        <TabsContent value="all">
          <DataTable
            columnNames={entrepotProductColumn}
            columnData={produitsFiltres}
            setSearch={setSearch}
            setCategory={setCategory}
            currentPage={page}
            setCurrentPage={setPage}
            totalPages={totalPages}
            categories={categories}
            isLoading={isLoading}
          />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Page;
