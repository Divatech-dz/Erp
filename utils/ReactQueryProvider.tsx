"use client";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import React, {useState} from "react";
import {StoreProvider} from "@/lib/context/store";
import {FiltersProvider} from "@/lib/context/Filters";

const ReactQueryProvider = ({children}: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <StoreProvider><FiltersProvider>{children}</FiltersProvider></StoreProvider>
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;