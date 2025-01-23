'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useFiltersContext} from "@/lib/context/Filters";
import {DataTable} from "@/components/data-table";
import {KeyMapDevis, devisColumn} from "@/constants"
import {transformNestedData} from '@/lib/utils';
import {getDevis} from "@/service/DevisService";

function Page() {
    const {
        commercials,
        page,
        setPage,
        search,
        setSearch,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        userId,
        setUserId
    } = useFiltersContext();

    const {isLoading, data: devisData} = useQuery({
        queryKey: [page, search, userId],
        queryFn: getDevis,
    });

    const devisResults = devisData?.results;
    const totalPages = devisData?.total_pages;
    const transformedData = transformNestedData(devisResults, KeyMapDevis);

    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Bons de devis</h1>
            <DataTable columnNames={devisColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
                       setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} setUserId={setUserId}
                       salesUsers={commercials} isLoading={isLoading}/>
        </section>
    );
}

export default Page;