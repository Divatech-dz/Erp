import {Sheet, SheetContent, SheetHeader, SheetTitle} from "../ui/sheet";
import {FilterContent} from "./sheet-content";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface ReusableSheetProps {
    open: boolean,
    onClose: () => void,
    title?: string,
    contentType: string,
    contentProps?: Record<string, any>,
    invoiceDetails?: Record<string, any>
}

export const ReusableSheet: React.FC<ReusableSheetProps> = ({open, onClose, title, contentType, invoiceDetails}) => {
    console.log(invoiceDetails)
    const renderContent = () => {
        switch (contentType) {
            case "table":
                return (
                    <>
                        <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Référence</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Prix unitaire</TableHead>
                                <TableHead>Quantité</TableHead>
                                <TableHead>Prix total</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoiceDetails && invoiceDetails?.produits?.map((produit: any) => {
                                return (
                                    <TableRow key={produit?.produit?.id}>
                                        <TableCell>{produit?.stock?.reference}</TableCell>
                                        <TableCell>{produit?.stock?.name}</TableCell>
                                        <TableCell>{produit?.unitprice} dzd</TableCell>
                                        <TableCell>{produit?.quantity}</TableCell>
                                        <TableCell>{produit?.totalprice} dzd</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                        <TableFooter>
                            <TableRow>
                                <TableCell className="w-60">
                                    <p>Total HT:</p>
                                    <p>{invoiceDetails?.total_price} dzd</p>
                                </TableCell>
                                <TableCell className="w-60">
                                    <p>Remise:</p>
                                    <p>{invoiceDetails?.Remise} dzd</p>
                                    </TableCell>
                                <TableCell className="w-60">
                                    <p>Sous-total HT: </p>
                                    <p>{invoiceDetails?.total_price-invoiceDetails?.Remise} dzd</p>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="w-60">
                                    <p>Frais de livraison:</p>
                                    <p>{invoiceDetails?.fraisLivraison} dzd</p>
                                </TableCell>
                                <TableCell className="w-60">
                                    <p>Montant avoir:</p>
                                    <p>{invoiceDetails?.total_avoir} dzd</p>
                                </TableCell>
                                <TableCell className="w-60">
                                    <p>Total TTC:</p>
                                    <p>{invoiceDetails?.total_soldprice} dzd</p>
                                </TableCell>
                            </TableRow>
                        </TableFooter></>
                )
            case "filter":
                return <FilterContent/>;
            default:
                return <div>No content available</div>;
        }
    };

    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetContent className="bg-gray-25 min-w-[1000px] space-y-10">
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                </SheetHeader>
                <div className="w-full min-h-[80%] justify-center p-4">
                    {renderContent()}
                </div>
            </SheetContent>
        </Sheet>
    );
};

