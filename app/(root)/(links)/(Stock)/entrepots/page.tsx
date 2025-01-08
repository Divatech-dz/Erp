"use client"
import { DataTable } from '@/components/data-table';
import { HeaderNavigation } from '@/components/header-navigation';
import { entropsRowsTable, keyMapStock, sidebarLinksManager } from '@/constants';
import { transformNestedData } from '@/lib/utils';
import { useGetWearHouses } from '@/service/useEntropts';
import React, { useState } from 'react';

function Page() {
  const [selectedNavigation, setSelectedNavigation] = useState<string | null>(null);
  const {data:entropt,isLoading}=useGetWearHouses()
  const role = 'manager';
  const handleNavigationSelect = (navigationLabel: string) => {
    setSelectedNavigation(navigationLabel);
  };
  const filter = sidebarLinksManager.filter(link => link.name === 'Stock')

  const transformedData= transformNestedData(entropt?.results, keyMapStock)
  
  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2  capitalize">Liste des entrepots</h1>
      {role === 'manager' && (
        filter.map(({ name, router }) => (
          <header className="w-full py-2 mb-4 flex items-center justify-center gap-4" key={name}>
            {router.map(({ label, router: subRoutes }) => (
              <HeaderNavigation
                key={label}
                label={label}
                router={subRoutes}
                selected={selectedNavigation}
                onSelect={handleNavigationSelect}
              />
            ))}
          </header>
        ))
      )}
      <DataTable
        columnNames={entropsRowsTable}
        columnData={transformedData}
        isLoading={isLoading}
      />

    </section>
  );
}

export default Page;