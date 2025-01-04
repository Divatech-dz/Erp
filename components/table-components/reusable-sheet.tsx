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
    const renderContent = () => {
        switch (contentType) {
            case "table":
                return (
                    <div>
                        <p>Table content</p>
                        {invoiceDetails && <p>{invoiceDetails.idBon}</p>}
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHeader>Ref</TableHeader>
                                    <TableHeader>Name</TableHeader>
                                    <TableHeader>Prix</TableHeader>
                                    <TableHeader>Quantité</TableHeader>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoiceDetails && invoiceDetails?.produits?.map((produit: any) => {
                                    return (
                                        <TableRow key={produit?.produit?.id}>
                                            <TableCell>{produit?.produit?.ref}</TableCell>
                                            <TableCell>{produit?.produit?.name}</TableCell>
                                            <TableCell>{produit?.produit?.unitprice}</TableCell>
                                            <TableCell>{produit?.produit?.quantite}</TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </div>
                )
            case "filter":
                return <FilterContent/>;
            default:
                return <div>No content available</div>;
        }
    };

    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetContent className="bg-gray-25 min-w-[600px]">
                <SheetHeader>
                    <SheetTitle>{title}</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col items-center w-full min-h-[80%] justify-center p-4">
                    {renderContent()}
                </div>
            </SheetContent>
        </Sheet>
    );
};

