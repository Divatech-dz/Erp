'use client'

import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {
    avanceSalaireColumn,
    keyMapAvanceSalaire
} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import {getAvanceSalaire} from "@/service/RHService";
import {transformNestedData} from "@/lib/utils";

function Page() {
    const {
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();

    const {isLoading, data: avanceSalaireData} = useQuery({
        queryKey: [page, search],
        queryFn: getAvanceSalaire
    });

    const totalPages = avanceSalaireData?.total_pages;
    const transformedData = transformNestedData(avanceSalaireData?.results, keyMapAvanceSalaire)

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Avances sur salaire</h1>
            <DataTable
                columnNames={avanceSalaireColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
                setCurrentPage={setPage} totalPages={totalPages} isLoading={isLoading}
            />
        </section>
    )
}

export default Page