'use client'

import { DataTable } from "@/components/data-table";
import { useFiltersContext } from "@/lib/context/Filters";
import { clotureColumn, keyMapCloture } from "@/constants";
import { transformNestedData } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getCloture } from "@/service/clotureService";


function Page() {
    const {
        page,
        setPage,
        caisse,
        caisses,
        setCaisse,
        setStartDate,
        setEndDate,
        startDate,
        endDate,
        utilisateur,
        utilisateurs,
        setUtilisateur,
    } = useFiltersContext();

  const { isLoading, data: clotureData } = useQuery({
    queryKey: [page, caisse, utilisateur,startDate, endDate],
    queryFn: getCloture,
  });

    const resultsCloture = clotureData?.results;
    const totalPages = clotureData?.total_pages;
    const transformedData= transformNestedData(resultsCloture, keyMapCloture)

    console.log("utilisateurs page",utilisateurs);
    
  
  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Liste des clôture caisse </h1>
      <DataTable
        columnNames={clotureColumn}
      
        columnData={transformedData}
        currentPage={page}
        setCurrentPage={setPage}
        totalPages={totalPages}
        caisses={caisses}
        setCaisse={setCaisse}
        utilisateurs={utilisateurs}
        setUtilisateur={setUtilisateur}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        isLoading={isLoading}
      />
    </section>
  )
}

export default Page