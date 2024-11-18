
import { DataTable } from "@/components/data-table";
import { invoices, rowTable } from "@/constants";



function Products() {
  return <div className='page-deign '>
    <DataTable  columnNames={rowTable} columnData={invoices}/>
 
  </div>;
}

export default Products;
