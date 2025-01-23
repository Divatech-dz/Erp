'use client'

import { DataTable } from "@/components/data-table";
import { useFiltersContext } from "@/lib/context/Filters";
import { keyMapCategory, familiesColumn } from "@/constants";
import { transformNestedData } from "@/lib/utils";
import { getCategory } from "@/service/categoryService";
import { useQuery } from "@tanstack/react-query";


function Page() {
    const {
        page,
        setPage,
        categories,
        setCategory,
        search,
        setSearch
    } = useFiltersContext();

  const { isLoading, data: categoryData } = useQuery({
    queryKey: [page, search],
    queryFn: getCategory,
  });

    const resultsCategories = categoryData?.results;
    const totalPages = categoryData?.total_pages;
    const transformedData= transformNestedData(resultsCategories, keyMapCategory)

  return (
    <section className="page-design">
      <h1 className="text-4xl font-bold p-2">Liste de familles </h1>
      <DataTable
        columnNames={familiesColumn}
        setSearch={setSearch}
        columnData={transformedData}
        currentPage={page}
        setCurrentPage={setPage}
        totalPages={totalPages}
        setCategory={setCategory}
        categories={categories}
        isLoading={isLoading}
      />
    </section>
  )
}

export default Page