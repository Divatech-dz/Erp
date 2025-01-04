"use client";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import React, {useState} from "react";
import {StoreProvider} from "@/lib/context/store";

const ReactQueryProvider = ({children}: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
          <StoreProvider>{children}</StoreProvider>
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;