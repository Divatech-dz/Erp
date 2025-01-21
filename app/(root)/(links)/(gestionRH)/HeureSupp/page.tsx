'use client'

import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {HoursColumn, keyMapHours} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import {getHeureSupplementaire} from "@/service/RHService";
import {transformNestedData} from "@/lib/utils";

function Page() {
    const {
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();

    const {isLoading, data: hoursData} = useQuery({
        queryKey: [page, search],
        queryFn: getHeureSupplementaire
    });

    const resultsHours = hoursData?.results;
    const totalPages = hoursData?.total_pages;
    const transformedData= transformNestedData(resultsHours, keyMapHours)

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Liste des heures supplémentaire</h1>
            <DataTable
                columnNames={HoursColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
                setCurrentPage={setPage} totalPages={totalPages} isLoading={isLoading}
            />
        </section>
    )
}

export default Page