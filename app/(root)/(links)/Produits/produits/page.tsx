'use client'

import React, { useState } from "react";
import { DataTable } from "@/components/data-table";
import { HeaderPages } from "@/components/header-pages";
import { rowTable } from "@/constants";
import { getProducts } from "@/service/productService";
import { useQuery } from '@tanstack/react-query';



export default function Products() {
    const [page, setPage] = useState(1);
    const { data} = useQuery({
        queryKey: [page],
        queryFn: getProducts
    });
    const results = data?.results;
    const totalPages = data?.total_pages;

    return (
        <section className="page-deign py-0">
            <HeaderPages />
            <DataTable columnNames={rowTable} columnData={results} currentPage={page} setCurrentPage={setPage} totalPages={totalPages}/>
        </section>
    );
}