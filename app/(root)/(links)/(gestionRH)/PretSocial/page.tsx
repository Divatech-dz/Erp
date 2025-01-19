'use client'

import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {PretSocialColumn, keyMapPretSocial} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import {getPretSocial} from "@/service/RHService";
import {transformNestedData} from "@/lib/utils";

function Page() {
    const {
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();

    const {isLoading, data: pretData} = useQuery({
        queryKey: [page, search],
        queryFn: getPretSocial
    });

    const resultsPret = pretData?.results;
    const totalPages = pretData?.total_pages;
    const transformedData= transformNestedData(resultsPret, keyMapPretSocial)

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Prêt social</h1>
            <DataTable
                columnNames={PretSocialColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
                setCurrentPage={setPage} totalPages={totalPages} isLoading={isLoading}
            />
        </section>
    )
}

export default Page