
import { DataTable } from "@/components/data-table";
import { HeaderPages } from "@/components/header-pages";
import { invoices, rowTable } from "@/constants";

function Products() {


  return <div className='page-deign '>
    <section className="size-full pt-5">
      <HeaderPages />
      <DataTable columnNames={rowTable} columnData={invoices} />
    </section>


  </div>;
}

export default Products;
