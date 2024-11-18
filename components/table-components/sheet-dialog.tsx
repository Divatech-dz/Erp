import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from "../ui/table"


const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function SheetDialog({OpenModal,closeModal}:Readonly<{
  OpenModal?:boolean;
  closeModal?:()=>void;


}>) {
  return (
    <Sheet open={OpenModal} onOpenChange={closeModal?.()}>
      <SheetContent className="bg-gray-25 min-w-[600px]">
        <SheetHeader>
          <SheetTitle>Details</SheetTitle>

        </SheetHeader>
        <div className="flex flex-col items-center w-full min-h-[80%] justify-center p-4">
          <div className="w-full max-w-[600px] bg-white shadow-md p-6 rounded-lg">
            <Table className="w-full text-sm text-left text-gray-500">
              <TableHeader className="border-b border-gray-200">
                <TableRow>
                  <TableHead className="w-[100px] font-semibold text-gray-700">Invoice</TableHead>
                  <TableHead className="font-semibold text-gray-700">Status</TableHead>
                  <TableHead className="font-semibold text-gray-700">Method</TableHead>
                  <TableHead className="text-right font-semibold text-gray-700">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.invoice} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-gray-900">{invoice.invoice}</TableCell>
                    <TableCell className="text-gray-600">{invoice.paymentStatus}</TableCell>
                    <TableCell className="text-gray-600">{invoice.paymentMethod}</TableCell>
                    <TableCell className="text-right text-gray-900">{invoice.totalAmount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>


        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  
  )
}
