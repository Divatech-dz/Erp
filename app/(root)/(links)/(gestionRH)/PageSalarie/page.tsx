'use client'
import {DataTable} from "@/components/data-table";
import {useFiltersContext} from "@/lib/context/Filters";
import {employeeColumn} from "@/constants";
import {useQuery} from "@tanstack/react-query";
import {getEmployee} from "@/service/RHService";

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

    const {isLoading, data: employeeData} = useQuery({
        queryKey: [page, search, startDate, endDate],
        queryFn: getEmployee
    });

    const resultsEmployee = employeeData?.results;
    const totalPages = employeeData?.total_pages;

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Liste des salariés</h1>
            <DataTable
                columnNames={employeeColumn} columnData={resultsEmployee} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
                       setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} isLoading={isLoading}
            />
        </section>
    )
}

export default Page