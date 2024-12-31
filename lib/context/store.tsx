"use client";
import { useGetStoreById } from '@/service/storeService';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface SelectedStore {
  id: number;
  name: string;
}

interface StoreContextType {
  retrieveStore: (storeId: number, name: string) => void;
  selectedStoreName: string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = useGetStoreById();
  const [selectedStore, setSelectedStore] = useState<SelectedStore>({
    id: 0,
    name: '',
  });

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender && selectedStore.id > 0) {

      store.mutateAsync({ store_id: selectedStore.id })
        .then((data) => {
          console.log('Store data:', data);
          setIsFirstRender(false); 
        })
        .catch((error) => {
          console.error('Error fetching store:', error);
        });
    }
  }, [selectedStore.id, isFirstRender]); 

  const retrieveStore = (storeId: number, name: string) => {
    setSelectedStore({ id: storeId, name: name });
  };

  return (
    <StoreContext.Provider
      value={{
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
