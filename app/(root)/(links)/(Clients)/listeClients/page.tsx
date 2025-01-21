'use client'

import React from 'react';
import {DataTable} from "@/components/data-table";
import {useQuery} from "@tanstack/react-query";
import {getClients} from "@/service/clientService";
import {clientColumn, keyMapClient} from "@/constants";
import {useFiltersContext} from "@/lib/context/Filters";
import { transformNestedData } from '@/lib/utils';

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

    const {isLoading,data: ClientsData} = useQuery({
        queryKey: [page, search, clientType, userId],
        queryFn: getClients
    });
  
    const clientsResults = ClientsData?.results;
    const totalPages = ClientsData?.total_pages;
    const documentKeys = ["NifDoc", "RCDoc", "NisDoc"];
    const transformedData= transformNestedData(clientsResults, keyMapClient,documentKeys,'Documents associés')

    return (
      <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Liste de clients</h1>
            <DataTable columnNames={clientColumn} columnData={transformedData} setSearch={setSearch} setClientType={setClientType} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} setUserId={setUserId} salesUsers={commercials}
                       isLoading={isLoading}/>
        </section>
    );
}

export default Page;