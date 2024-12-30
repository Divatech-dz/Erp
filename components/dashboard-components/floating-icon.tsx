'use client';

import React from 'react';
import { Store } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Dropdown } from '../table-components';
import { useGetAllStore } from '@/service/storeService';



export default function FloatingIcon() {
  const {data:store}= useGetAllStore()
  const storeTable=()=>{
    return store?.results?.map((store: { id: number, capitaleSocial: string }) => ({
      id: store.id,
      name: store.capitaleSocial,
    }));
  }
  return (
    <Dialog>

      <DialogTrigger asChild>
        <button
          className="fixed bottom-5 right-5 z-50 flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 active:scale-95 transition-transform duration-300"
        >
          <Store className="h-6 w-6" />
        </button>
      </DialogTrigger>

 
      <DialogContent className="w-full max-w-lg p-6 rounded-xl bg-white shadow-2xl">
        
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Choisissez un magasin
          </DialogTitle>
        </DialogHeader>

       
        <div className="mt-6 grid place-items-center w-full">
          <Dropdown
            columns={storeTable()}
            showLabel={true}
            label="store" 
            enableRetrieveStore={true}      
            classNameTrigger="px-4 py-2 w-full md:w-3/4 lg:w-1/2 text-gray-700 font-medium bg-gray-100 capitalize 
              flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 outline-none shadow-md transition-all rounded-lg"
            classNameContent="w-[200px] rounded-lg shadow-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
         
}
