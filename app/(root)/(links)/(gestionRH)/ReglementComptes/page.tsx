'use client'
import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {reglementColumn} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import { getReglementCompte} from "@/service/RHService";

function Page() {
    const {
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();

    const {isLoading, data: reglementData} = useQuery({
        queryKey: [page, search],
        queryFn: getReglementCompte
    });

    const resultsReglement = reglementData?.results;
    const totalPages = reglementData?.total_pages;

    return (
        <section className="page-design py-0">
            <h1 className="text-4xl font-bold p-2">Liste des règlements salariés</h1>
            <DataTable
                columnNames={reglementColumn} columnData={resultsReglement} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} isLoading={isLoading}
            />
        </section>
    )
}

export default Page