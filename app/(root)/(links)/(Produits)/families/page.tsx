'use client'

import { DataTable } from "@/components/data-table";
import { useFiltersContext } from "@/lib/context/Filters";
import { HeaderNavigation } from "@/components/header-navigation";
import { sidebarLinksManager, keyMapCategory, familiesColumn } from "@/constants";
import { transformNestedData } from "@/lib/utils";
import { getCategory } from "@/service/categoryService";
import { useQuery } from "@tanstack/react-query";


function Page() {
    const {
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();


  const role = 'manager';

  const { isLoading, data: categoryData } = useQuery({
    queryKey: [page, search],
    queryFn: getCategory,
  });


  
    const resultsCategories = categoryData?.results;
    const totalPages = categoryData?.total_pages;

    

  const filter = sidebarLinksManager.filter(link => link.name === 'Produits')
  const transformedData= transformNestedData(resultsCategories, keyMapCategory)
  console.log(transformedData)

  
  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Liste de familles </h1>
      {role === 'manager' && (
        filter.map(({ name, router }) => (
          <header className="w-full py-2 mb-4 flex items-center justify-center gap-4" key={name}>
            {router.map(({ label, router: subRoutes }) => (
              <HeaderNavigation
                key={label}
                label={label}
                router={subRoutes}
                
              />
            ))}
          </header>
        ))
      )}

      <DataTable
        columnNames={familiesColumn}
        setSearch={setSearch} 
        columnData={transformedData}
        currentPage={page}
        setCurrentPage={setPage}
        totalPages={totalPages}
    
        isLoading={isLoading}
      />
    </section>
  )

}

export default Page