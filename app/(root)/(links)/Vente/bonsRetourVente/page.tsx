'use client'

import React, {useState} from 'react';
import { DataTable } from "@/components/data-table";
import {useQuery} from "@tanstack/react-query";
import {getReturnNotes} from "@/service/returnNotesService";
import {getUsersList} from "@/service/userListService";
import { returnColumn } from "@/constants";

function Page() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [userId, setUserId] = useState(0);

    const {data: ReturnNotesData} = useQuery({
        queryKey: [page, search, startDate, endDate, userId],
        queryFn: getReturnNotes
    });

    const {data: userListData} = useQuery({
        queryKey: ['userList'],
        queryFn: getUsersList
    });

    const salesUsers = userListData?.filter((user: any) => user?.role === 'commercial' || user?.role === 'Vendeuse');
    const returnResults = ReturnNotesData?.results;
    const totalPages = ReturnNotesData?.total_pages;

    return (
        <section>
            <h1 className="text-4xl font-bold p-2">Bons de retour</h1>
             <DataTable columnNames={returnColumn} columnData={returnResults} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
                       setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} setUserId={setUserId}
                       salesUsers={salesUsers}/>
        </section>
    );
}

export default Page;