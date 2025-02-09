'use client'
import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {absenceColumn, keyMapAbsence} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import {getAbsence} from "@/service/RHService";
import {transformNestedData} from "@/lib/utils";

function Page() {
    const {
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();

    const {isLoading, data: absenceData} = useQuery({
        queryKey: [page, search],
        queryFn: getAbsence
    });
    const resultsAbsence = absenceData?.results;
    const totalPages = absenceData?.total_pages;
    const transformedData= transformNestedData(resultsAbsence, keyMapAbsence)

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Liste des absences</h1>
            <DataTable
                columnNames={absenceColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
                setCurrentPage={setPage} totalPages={totalPages} isLoading={isLoading}
            />
        </section>
    )
}

export default Page