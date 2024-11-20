
import { DataTable } from "@/components/data-table";
import { invoices, rowTable } from "@/constants";



function Products() {
  return <div className='page-deign '>
    <section className="size-full pt-5">
    <DataTable  columnNames={rowTable} columnData={invoices}/>
    </section>
    
 
  </div>;
}

export default Products;
