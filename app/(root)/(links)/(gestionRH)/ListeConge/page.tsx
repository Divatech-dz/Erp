'use client'
import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {congeListColumn} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import {getConge} from "@/service/RHService";

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
    console.log(resultsConge)

    return (
        <section className="page-design py-0">
            <h1 className="text-4xl font-bold p-2">Liste des congés pris</h1>
            <DataTable
                columnNames={congeListColumn} columnData={resultsConge} setSearch={setSearch} currentPage={page}
                setCurrentPage={setPage} totalPages={totalPages} isLoading={isLoading}
            />
        </section>
    )
}

export default Page