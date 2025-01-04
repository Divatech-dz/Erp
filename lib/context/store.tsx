"use client";
import { useGetStoreById } from '@/service/storeService';
import React, { createContext, useContext, useState } from 'react';

interface SelectedStore {
  id: number;
  name: string;
}

interface StoreContextType {
  storeData: any;
  isLoading: boolean;
  error: Error | null;
  retrieveStore: (storeId: number, name: string) => void;
  selectedStoreName: string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedStore, setSelectedStore] = useState<SelectedStore>({
    id: 0,
    name: '',
  });

  const { data: storeData, isLoading, error } = useGetStoreById(
    selectedStore.id ? { store_id: selectedStore.id } : undefined
  );

  const retrieveStore = (storeId: number, name: string) => {
    setSelectedStore({ id: storeId, name:name });
  };

  return (
    <StoreContext.Provider
      value={{
        storeData,
        isLoading,
        error,
        retrieveStore,
        selectedStoreName: selectedStore.name,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStoreContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStoreContext must be used within a StoreProvider');
  }
  return context;
};
