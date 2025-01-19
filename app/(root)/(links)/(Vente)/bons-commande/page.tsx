'use client'

import React, {useMemo} from 'react';
import {useQuery} from "@tanstack/react-query";
import {useFiltersContext} from "@/lib/context/Filters";
import {getDeliveryNotes} from "@/service/ordersNoteService";
import {DataTable} from "@/components/data-table";
import {keyMapNotes, NotesColumn} from "@/constants"
import {transformNestedData} from '@/lib/utils';
import {HeaderNavigation} from '@/components/header-navigation';


function BonsCommandeVente() {

    const role = 'manager'
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

    const {isLoading, data: notesData} = useQuery({
        queryKey: [page, search, startDate, endDate, userId],
        queryFn: getDeliveryNotes,
    });

    const notesResults = notesData?.results;
    const totalPages = notesData?.total_pages;
    const transformedData = transformNestedData(notesResults, keyMapNotes);
    console.log(notesResults);
    return (
        <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Bons de Commande</h1>
            <DataTable columnNames={NotesColumn} columnData={transformedData} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
                       setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} setUserId={setUserId}
                       salesUsers={salesUsers} isLoading={isLoading}/>
        </section>
    );
}

export default BonsCommandeVente;