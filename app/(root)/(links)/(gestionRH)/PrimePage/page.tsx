'use client'
import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {primeMotivationColumn, keyMapPrimeMotivation} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import { getPrime} from "@/service/RHService";
import {transformNestedData} from "@/lib/utils";

function Page() {
    const {
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();

    const {isLoading, data: primeData} = useQuery({
        queryKey: [page, search],
        queryFn: getPrime
    });

    const resultsConge = primeData?.results;
    const totalPages = primeData?.total_pages;
    const transformedData= transformNestedData(resultsConge, keyMapPrimeMotivation)

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Primes de dons et motivations</h1>
            <DataTable
                columnNames={primeMotivationColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
                setCurrentPage={setPage} totalPages={totalPages} isLoading={isLoading}
            />
        </section>
    )
}

export default Page