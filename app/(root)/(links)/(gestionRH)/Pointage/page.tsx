'use client'
import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {keyMapPointage, pointageColumn} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import {getPointage} from "@/service/RHService";
import {transformNestedData} from "@/lib/utils";

function Page() {
    const {
        page,
        setPage,
        search,
        setSearch,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
    } = useFiltersContext();

    const {isLoading, data: pointageData} = useQuery({
        queryKey: [page, search, startDate, endDate],
        queryFn: getPointage
    });

    const resultsPointage = pointageData?.results;
    const totalPages = pointageData?.total_pages;
    const transformedData= transformNestedData(resultsPointage,keyMapPointage )

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Liste des pointages</h1>
            <DataTable
                columnNames={pointageColumn} columnData={transformedData} setSearch={setSearch} startDate={startDate}
                setStartDate={setStartDate} currentPage={page}
                endDate={endDate} setEndDate={setEndDate} setCurrentPage={setPage} totalPages={totalPages}
                isLoading={isLoading}
            />
        </section>
    )
}

export default Page