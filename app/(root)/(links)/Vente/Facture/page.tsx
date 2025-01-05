'use client'

import React from 'react';
import {useFiltersContext} from "@/lib/context/Filters";
import {useQuery} from "@tanstack/react-query";
import {getBills} from "@/service/facturesService";
import {DataTable} from "@/components/data-table";
import {factureColumn} from "@/constants"

function Page() {

    const {
        salesUsers,
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

    const {isLoading, data: facturesData} = useQuery({
        queryKey: [page, search, startDate, endDate, userId],
        queryFn: getBills
    });

    const factureResults = facturesData?.results;
    const totalPages = facturesData?.total_pages;

    return (
        <section className="py-2">
            <h1 className="text-4xl font-bold p-2">Factures</h1>
            <DataTable columnNames={factureColumn} columnData={factureResults} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
                       setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} setUserId={setUserId}
                       salesUsers={salesUsers} isLoading={isLoading}/>
        </section>
    );
}

export default Page;