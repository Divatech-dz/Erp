
'use client'

import { DataTable } from "@/components/data-table";
import { useFiltersContext } from "@/lib/context/Filters";
import { HeaderNavigation } from "@/components/header-navigation";
import { sidebarLinksManager, keyMapCategory, familiesColumn } from "@/constants";
import { transformNestedData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getEntrepot } from "@/service/entrepotService";

function Page()  {


    const {
        page,
        setPage,
        categories,
        setCategory,
        search,
        setSearch
    } = useFiltersContext();



  const { isLoading, data: entrepotData } = useQuery({
    queryKey: [page, search],
    queryFn: getEntrepot,
  });


  
    const resultsEntrepots = entrepotData?.results;
    const totalPages = entrepotData?.total_pages;

    
  const transformedData= transformNestedData(resultsEntrepots, keyMapCategory)
  console.log(transformedData)

  return (
    <section className="page-design ">
      <h1 className="text-4xl font-bold p-2">Répartition des produits sur les entrepots</h1>
      <Tabs defaultValue="account" >
        <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">

             <DataTable
                    columnNames={familiesColumn}
                    setSearch={setSearch} 
                    columnData={transformedData}
                    currentPage={page}
                    setCurrentPage={setPage}
                    totalPages={totalPages}
                    setCategory={setCategory}
                    categories={categories}
                    isLoading={isLoading}
                  />


        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

    </section>
  )
}

export default Page;
