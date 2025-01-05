'use client'

import React from 'react';
import {DataTable} from "@/components/data-table";
import {useQuery} from "@tanstack/react-query";
import {getClients} from "@/service/clientService";
import {clientColumn} from "@/constants";
import {useFiltersContext} from "@/lib/context/Filters";

function Page() {
    const {
        commercials,
        page,
        setPage,
        search,
        setSearch,
        clientType,
        setClientType,
        userId,
        setUserId
    } = useFiltersContext();

    const {isLoading, error, data: ClientsData} = useQuery({
        queryKey: [page, search, clientType, userId],
        queryFn: getClients
    });

    const clientsResults = ClientsData?.results;
    const totalPages = ClientsData?.total_pages;
    console.log(clientsResults)

    return (
        <section>
            <h1 className="text-4xl font-bold p-2">Liste de clients</h1>
            <DataTable columnNames={clientColumn} columnData={clientsResults} setSearch={setSearch} setClientType={setClientType} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} setUserId={setUserId} salesUsers={commercials}
                       isLoading={isLoading}/>
        </section>
    );
}

export default Page;