'use client'

import React from 'react';
import {DataTable} from "@/components/data-table";
import {useQuery} from "@tanstack/react-query";
import {getFournisseurs} from "@/service/clientService";
import {FournisseurColumn, keyMapFournisseur} from "@/constants";
import { transformNestedData } from '@/lib/utils';

function Page() {

    const {isLoading,data: fournisseurData} = useQuery({
        queryKey: ['fournisseurs'],
        queryFn: getFournisseurs
    });
    const transformedData= transformNestedData(fournisseurData, keyMapFournisseur)

    return (
      <section className="page-design">
            <h1 className="text-4xl font-bold p-2">Prospection Clients</h1>
            <DataTable columnNames={FournisseurColumn} columnData={transformedData}
                       isLoading={isLoading}/>
        </section>
    );
}

export default Page;