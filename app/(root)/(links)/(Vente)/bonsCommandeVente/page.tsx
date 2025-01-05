'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {useFiltersContext} from "@/lib/context/Filters";
import {getDeliveryNotes} from "@/service/ordersNoteService";
import {DataTable} from "@/components/data-table";
import {NotesColumn} from "@/constants"


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

    const {isLoading, error, data: notesData} = useQuery({
        queryKey: [page, search, startDate, endDate, userId],
        queryFn: getDeliveryNotes
    });

    const notesResults = notesData?.results;
    const totalPages = notesData?.total_pages;

    return (
        <section className="py-2">
            <h1 className="text-4xl font-bold p-2">Bons de Commande</h1>
            <DataTable columnNames={NotesColumn} columnData={notesResults} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
                       setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} setUserId={setUserId}
                       salesUsers={salesUsers} isLoading={isLoading}/>
        </section>
    );
}

export default Page;