'use client'

import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getBills} from "@/service/facturesService";
import {getUsersList} from "@/service/userListService";
import {DataTable} from "@/components/data-table";
import {factureColumn} from "@/constants"

function Page() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [userId, setUserId] = useState(0);

    const {data: facturesData} = useQuery({
        queryKey: [page, search, startDate, endDate, userId],
        queryFn: getBills
    });

    const {data: userListData} = useQuery({
        queryKey: ['userList'],
        queryFn: getUsersList
    })

    const salesUsers = userListData?.filter((user: any) => user?.role === 'commercial' || user?.role === 'Vendeuse');
    const factureResults = facturesData?.results;
    const totalPages = facturesData?.total_pages;

    return (
        <section className="py-2">
            <h1 className="text-4xl font-bold p-2">Factures</h1>
            <DataTable columnNames={factureColumn} columnData={factureResults} setSearch={setSearch} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} startDate={startDate}
                       setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} setUserId={setUserId}
                       salesUsers={salesUsers}/>
        </section>
    );
}

export default Page;