'use client'

import React from 'react';
import {DataTable} from "@/components/data-table";
import {useQuery} from "@tanstack/react-query";
import {getProspects} from "@/service/clientService";
import {prospectClientColumn, keyMapProspectClient} from "@/constants";
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

    const {isLoading,data: prospectsData} = useQuery({
        queryKey: [page, search, clientType, userId],
        queryFn: getProspects
    });

    const prosClientsResults = prospectsData?.results;
    const totalPages = prospectsData?.total_pages;
    const transformedData= transformNestedData(prosClientsResults, keyMapProspectClient)

    return (
      <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Prospection Clients</h1>
            <DataTable columnNames={prospectClientColumn} columnData={transformedData} setSearch={setSearch} setClientType={setClientType} currentPage={page}
                       setCurrentPage={setPage} totalPages={totalPages} setUserId={setUserId} salesUsers={commercials}
                       isLoading={isLoading}/>
        </section>
    );
}

export default Page;