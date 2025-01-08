'use client'

import React from 'react';
import { DataTable } from "@/components/data-table";
import {useQuery} from "@tanstack/react-query";
import {getReturnNotes} from "@/service/returnNotesService";
import { returnColumn } from "@/constants";
import {useFiltersContext} from "@/lib/context/Filters";

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

    const {isLoading, data: ReturnNotesData} = useQuery({
        queryKey: [page, search, startDate, endDate, userId],
        queryFn: getReturnNotes
    });

    const returnResults = ReturnNotesData?.results;
    const totalPages = ReturnNotesData?.total_pages;

    return (
        <section>
            <h1 className="text-4xl font-bold p-2">Bons de retour</h1>
             <DataTable columnNames={returnColumn} columnData={returnResults} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
                       setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} setUserId={setUserId}
                       salesUsers={salesUsers} isLoading={isLoading}/>
        </section>
    );
}

export default Page;