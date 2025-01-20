'use client'

import React from 'react';
import {DataTable} from "@/components/data-table";
import {useQuery} from "@tanstack/react-query";
import {getBanks} from "@/service/clientService";
import {BanksColumn, keyMapBanks} from "@/constants";
import { transformNestedData } from '@/lib/utils';

function Page() {
    const {isLoading,data: banksData} = useQuery({
        queryKey: ['banks'],
        queryFn: getBanks
    });

    const transformedData= transformNestedData(banksData, keyMapBanks)
    console.log(banksData)
    return (
      <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Liste des banques</h1>
            <DataTable columnNames={BanksColumn} columnData={transformedData}
                       isLoading={isLoading}/>
        </section>
    );
}

export default Page;