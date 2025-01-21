'use client'
import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {congeListColumn, keyMapListConge} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import {getConge} from "@/service/RHService";
import {transformNestedData} from "@/lib/utils";

function Page() {
    const {
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();

    const {isLoading, data: congeData} = useQuery({
        queryKey: [page, search],
        queryFn: getConge
    });

    const resultsConge = congeData?.results;
    const totalPages = congeData?.total_pages;
    const transformedData = transformNestedData(resultsConge, keyMapListConge)

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Liste des congés pris</h1>
            <DataTable
                columnNames={congeListColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
                setCurrentPage={setPage} totalPages={totalPages} isLoading={isLoading}
            />
        </section>
    )
}

export default Page