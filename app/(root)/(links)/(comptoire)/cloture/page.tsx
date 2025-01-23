'use client'

import { DataTable } from "@/components/data-table";
import { useFiltersContext } from "@/lib/context/Filters";
import { HeaderNavigation } from "@/components/header-navigation";
import { sidebarLinksManager, keyMapCategory, familiesColumn, clotureColumn, keyMapCloture } from "@/constants";
import { transformNestedData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getCloture } from "@/service/clotureService";


function Page() {
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
        endDate
    } = useFiltersContext();



  const { isLoading, data: clotureData } = useQuery({
    queryKey: [page, search,caisseId, userId,startDate, endDate],
    queryFn: getCloture,
  });


  
    const resultsCloture = clotureData?.results;
    const totalPages = clotureData?.total_pages;

    
  const transformedData= transformNestedData(resultsCloture, keyMapCloture)
  console.log(transformedData)

  
  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Liste des clôture caisse </h1>

      <DataTable
        columnNames={clotureColumn}
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
  )

}

export default Page