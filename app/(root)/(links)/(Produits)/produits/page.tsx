'use client'

import { DataTable } from "@/components/data-table";
import { useFiltersContext } from "@/lib/context/Filters";
import { HeaderNavigation } from "@/components/header-navigation";
import { sidebarLinksManager, rowTable, keyMapProduct } from "@/constants";
import { getProducts } from "@/service/productService";
import { useQuery } from "@tanstack/react-query";

import { transformNestedData } from "@/lib/utils";


function Page() {
    const {
        categories,
        category,
        setCategory,
        page,
        setPage,
        search,
        setSearch
    } = useFiltersContext();


  const role = 'manager';

  const { isLoading, data: productsData } = useQuery({
    queryKey: [page, search, category],
    queryFn: getProducts,
  });


    const resultsProducts = productsData?.results;
    const totalPages = productsData?.total_pages;


 
  const filter = sidebarLinksManager.filter(link => link.name === 'Produits')
  const transformedData= transformNestedData(resultsProducts, keyMapProduct)
  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Liste des produits</h1>
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
        columnNames={rowTable}
        setSearch={setSearch}
        setCategory={setCategory}
        columnData={transformedData}
        currentPage={page}
        setCurrentPage={setPage}
        totalPages={totalPages}
        categories={categories}
        isLoading={isLoading}
      />
    </section>
  )

}

export default Page