'use client';

import React from 'react';
import {Store} from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog';
import {useGetAllStore} from '@/service/storeService';
import {useStoreContext} from "@/lib/context/store";


export default function FloatingIcon() {

    const { retrieveStore } = useStoreContext();
    const {data: store} = useGetAllStore()

    const storeTable = () => {
        return store?.results?.map((store: { id: number, name: string }) => ({
            id: store.id,
            name: store.name,
        }));
    }

    const handleRetrieveStore = (columnId: number, name: string) => {
        if ( typeof window !== "undefined") {
            retrieveStore(columnId, name).then(r => r);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button
                    className="fixed bottom-5 right-5 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 active:scale-95 transition-transform duration-300"
                >
                    <Store className="h-6 w-6"/>
                </button>
            </DialogTrigger>
            <DialogContent className="w-full max-w-lg p-6 rounded-xl bg-white shadow-2xl">
                <DialogHeader className="text-center">
                    <DialogTitle className="text-xl font-semibold text-gray-800">
                        Choisissez un magasin
                    </DialogTitle>
                </DialogHeader>
                    <ul className="mx-auto w-full text-center md:w-3/4 lg:w-1/2 text-gray-700 font-medium rounded-lg">
                        {storeTable()?.map((store: any) => (
                            <li key={store.id}
                                className="px-4 py-2 hover:bg-gray-200 active:bg-gray-300 rounded-lg cursor-pointer my-5"
                                onClick={() => handleRetrieveStore(store.id, store.name)}
                            >
                                {store.name}
                            </li>
                        ))}
                    </ul>
            </DialogContent>
        </Dialog>
    );
}
