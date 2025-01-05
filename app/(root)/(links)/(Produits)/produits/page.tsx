'use client'
import { DataTable } from "@/components/data-table";
import { HeaderNavigation } from "@/components/header-navigation";
import { sidebarLinksManager, rowTable } from "@/constants";
import { getCategory } from "@/service/categoryService";
import { getProducts } from "@/service/productService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

function Product() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(0);
  const [selectedNavigation, setSelectedNavigation] = useState<string | null>(null);
  const role = 'manager';

  const { data: productsData } = useQuery({
    queryKey: [page, search, category],
    queryFn: getProducts
  });

  const { data: categoryData } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory
  });

  const resultsProducts = productsData?.results;
  const totalPages = productsData?.total_pages;
  const categories = categoryData?.map((cat: any) => ({ id: cat.id, category: cat.Libellé }));
  

  const handleNavigationSelect = (navigationLabel: string) => { 
      setSelectedNavigation(navigationLabel);
  };
  return (
    <section className="page-design py-0">
    <h1 className="text-4xl font-bold p-2">Liste des produits</h1>
    {role === 'manager' && (
      sidebarLinksManager.map(({ name, router }) => (
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
      columnNames={rowTable} 
      setSearch={setSearch} 
      setCategory={setCategory} 
      columnData={resultsProducts} 
      currentPage={page} 
      setCurrentPage={setPage} 
      totalPages={totalPages} 
      categories={categories} 
    />
  </section>
  )
}

export default Product