'use client'

import React, {useState} from 'react';
import { useQuery } from "@tanstack/react-query";
import {getDeliveryNotes} from "@/service/ordersNoteService";
import { DataTable } from "@/components/data-table";
import { NotesColumn } from "@/constants"

function Page() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const {data: notesData} = useQuery({
        queryKey: [page, search, startDate, endDate],
        queryFn: getDeliveryNotes
    });

    console.log(notesData);

    const notesResults = notesData?.results;
    const totalPages = notesData?.total_pages;

    return (
        <section>
            <h1 className="text-4xl font-bold p-2">Bons de sortie</h1>
            <DataTable columnNames={NotesColumn} columnData={notesResults} setSearch={setSearch} currentPage={page} setCurrentPage={setPage} totalPages={totalPages} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate}/>
        </section>
    );
}

export default Page;