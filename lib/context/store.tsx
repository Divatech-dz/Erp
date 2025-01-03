'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useGetStoreById } from '@/service/storeService';

interface SelectedStore {
  id: number;
  name: string;
}

interface StoreContextType {
  retrieveStore: (storeId: number, name: string) => Promise<void>;
  selectedStoreName: string;
  isLoading: boolean;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = useGetStoreById();
  const [selectedStore, setSelectedStore] = useState<SelectedStore>({
    id: 0,
    name: '', 
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('selectedStoreName');
      if (storedName) {
        setSelectedStore({ id: 0, name: storedName }); 
      }
    }
  }, []);

  const retrieveStore = async (storeId: number, name: string): Promise<void> => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedStoreName', name); 
    }
    setIsLoading(true);
    try {
      setSelectedStore({ id: storeId, name }); 
      await store.mutateAsync({ store_id: storeId });
      location.reload(); 
    } catch (error) {
      console.error('Error fetching store:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        retrieveStore,
        selectedStoreName: selectedStore.name,
        isLoading,
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
