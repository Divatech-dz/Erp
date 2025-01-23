import React from "react";
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
import {usePathname} from "next/navigation";
import {formatAmount} from "@/lib/utils";

interface ReusableSheetProps {
    open: boolean,
    onClose: () => void,
    title?: string,
    contentType: string,
    contentProps?: Record<string, any>,
    invoiceDetails?: Record<string, any>
}

export const ReusableSheet: React.FC<ReusableSheetProps> = ({open, onClose, title, contentType, invoiceDetails}) => {

    const pathname = usePathname()

    const renderContent = () => {
        switch (contentType) {
            case "table":
                return (
                    <section>
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
                                    <TableRow key={produit?.produit?.id || produit?.id}>
                                        <TableCell>{produit?.stock?.reference || produit?.reference || produit?.produit?.reference}</TableCell>
                                        <TableCell>{produit?.stock?.name || produit?.name || produit?.produit?.name}</TableCell>
                                        <TableCell>{formatAmount(Number(produit?.unitprice ?? produit?.price ?? produit?.UnitPrice ?? 0))}</TableCell>
                                        <TableCell>{produit?.quantity }</TableCell>
                                       <TableCell>{formatAmount(Number(produit?.totalprice ?? (produit?.price ?? produit?.UnitPrice * produit?.quantity) ?? 0))}</TableCell>
                                    </TableRow>
                                );

                            })}
                        </TableBody>
                    </Table>
                        {
                            <TableFooter>
                            <TableRow>
                                <TableCell className="w-60">
                                    <p>Total HT:</p>
                                    <p>{formatAmount(invoiceDetails?.total_price)}</p>
                                </TableCell>
                                <TableCell className="w-60">
                                    <p>Remise:</p>
                                    <p>{formatAmount(Number(invoiceDetails?.Remise))}</p>
                                </TableCell>
                                <TableCell className="w-60">
                                    <p>Sous-total HT: </p>
                                    <p>{formatAmount(invoiceDetails?.total_price - invoiceDetails?.Remise)}</p>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="w-60">
                                    <p>Frais de livraison:</p>
                                    <p>{formatAmount(Number(invoiceDetails?.fraisLivraison))}</p>
                                </TableCell>
                                <TableCell className="w-60">
                                    <p>Montant avoir:</p>
                                    <p>{formatAmount(invoiceDetails?.total_avoir)} </p>
                                </TableCell>
                                <TableCell className="w-60">
                                    <p>Total TTC:</p>
                                    <p>{formatAmount(invoiceDetails?.total_soldprice)}</p>
                                </TableCell>
                            </TableRow>
                        </TableFooter>}
                    </section>
                )
            case "filter":
                return <FilterContent/>;
            default:
                return <div>No content available</div>;
        }
    };

    return (
        <Sheet open={open} onOpenChange={onClose} >
            <SheetContent className="bg-gray-25 min-w-[1000px] space-y-10 overflow-y-scroll scrollbar-hide">
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

