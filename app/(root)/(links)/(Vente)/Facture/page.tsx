'use client'

import React, { useMemo } from 'react';
import { useFiltersContext } from "@/lib/context/Filters";
import { useQuery } from "@tanstack/react-query";
import { getBills } from "@/service/facturesService";
import { DataTable } from "@/components/data-table";
import { factureColumn, keyMapFacterur, sidebarLinksManager } from "@/constants"
import { transformNestedData } from '@/lib/utils';
import { HeaderNavigation } from '@/components/header-navigation';


function Facture() {
  const role = 'manager';
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
    setUserId,
  } = useFiltersContext();

  

  const { isLoading, data: facturesData } = useQuery({
    queryKey: [page, search, startDate,endDate, userId],
    queryFn: getBills,
  });

  const factureResults = facturesData?.results;
  const totalPages = facturesData?.total_pages;

  const transformedData = useMemo(() => {
    return transformNestedData(factureResults, keyMapFacterur);
  }, [factureResults, keyMapFacterur]);

  const filteredLinks = sidebarLinksManager.find((link) => link.name === 'Vente');

  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Factures</h1>
      {role === 'manager' && filteredLinks && (
        <header className="w-full py-2 mb-4 flex items-center justify-center gap-4">
          {filteredLinks.router.map(({ label, router: subRoutes }) => (
            <HeaderNavigation key={label} label={label} router={subRoutes} />
          ))}
        </header>
      )}
      <DataTable
        columnNames={factureColumn}
        columnData={transformedData}
        setSearch={setSearch}
        currentPage={page}
        setCurrentPage={setPage}
        totalPages={totalPages}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        setUserId={setUserId}
        salesUsers={salesUsers}
        isLoading={isLoading}
      />
    </section>
  );
}


export default Facture;