'use client'

import React, { useMemo } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useFiltersContext } from "@/lib/context/Filters";
import { getDeliveryNotes } from "@/service/ordersNoteService";
import { DataTable } from "@/components/data-table";
import { keyMapNotes, NotesColumn, sidebarLinksManager } from "@/constants"
import { transformNestedData } from '@/lib/utils';
import { HeaderNavigation } from '@/components/header-navigation';
import { ColorRing } from 'react-loader-spinner';


function BonsCommandeVente() {

  const role = 'manager'
  const {
    salesUsers,
    page,
    setPage,
    search,
    setSearch,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    userId,
    setUserId
  } = useFiltersContext();

  const { isLoading, data: notesData } = useQuery({
    queryKey: [page, search, startDate, endDate, userId],
    queryFn: getDeliveryNotes,
  });

  const notesResults = notesData?.results;
  const totalPages = notesData?.total_pages;
  const transformedData = useMemo(()=>{
    return transformNestedData(notesResults, keyMapNotes)
  },[notesResults,keyMapNotes]) 
 
  const filter = sidebarLinksManager.filter(link => link.name === 'Vente')


  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Bons de Commande</h1>
      {role === 'manager' && (
        filter.map(({ name, router }) => (
          <header className="w-full py-2 mb-4 flex items-center justify-center gap-4" key={name}>
            {router.map(({ label, router: subRoutes }) => (
             <HeaderNavigation
             key={label}
             label={label}
             router={subRoutes}
           
           />
            ))}
          </header>
        ))
      )}
      <DataTable columnNames={NotesColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
        setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
        setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} setUserId={setUserId}
        salesUsers={salesUsers} isLoading={isLoading} />
    </section>
  );
}

export default BonsCommandeVente;