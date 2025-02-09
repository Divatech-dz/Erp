'use client'

import React, {useEffect, useMemo, useState} from "react";
import Image from "next/image";
import {Button} from "./ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import pathName from "../constants/pathname.json"
import {PaginationTable, ReusableSheet, TopContent} from "./table-components";
import {icons} from "@/constants/icons";
import {TableProps} from "@/types";
import {ColorRing} from "react-loader-spinner";
import {cn} from "@/lib/utils";
import columnRenderers from "@/constants/columnRenderers";
import {usePathname} from "next/navigation";

const getCellContent = (row: string) =>
    row !== "" ? row : "N/A";
export const DataTable = ({
                              columnNames,
                              columnData,
                              currentPage,
                              setCurrentPage,
                              totalPages,
                              setCategory,
                              setSearch,
                              categories,
                              startDate,
                              setStartDate,
                              endDate,
                              setEndDate,
                              setUserId,
                              salesUsers,
                              isLoading,
                              setClientType,
                              setFournisseurId,
                              entrepots,
                              setEntrepot,
                              setEntrepotDepart,
                              setEntrepotArrive,
                              fournisseurId,
                              fournisseur
                          }: TableProps) => {
    const pathname = usePathname();
    const [visibleColumns, setVisibleColumns] = useState(
        new Set<string>(columnNames?.map((col) => col.id))
    );
    const [tableData, setTableData] = useState<Record<string, any>[]>(columnData ?? []);
    const [openModal, setOpenModal] = React.useState(false);
    const [contentType, setContentType] = React.useState<string>("table");
    const [sortedButton, setSortedButton] = useState<{
        column: string;
        ascending: boolean;
    }>({
        column: "",
        ascending: true,
    });
    const [invoiceDetails, setInvoiceDetails] = useState<Record<string, any>>({});

    useEffect(() => {
        setTableData(columnData ?? []);
    }, [columnData]);

    const headerColumns = useMemo(() => {
        return columnNames?.filter((column) => visibleColumns.has(column.id));
    }, [columnNames, visibleColumns]);

    const handleSort = (columnKey: string) => {
        const ascending = sortedButton.column === columnKey ? !sortedButton.ascending : true;
        setSortedButton({column: columnKey, ascending});

        setTableData((prevData) =>
            [...prevData]?.sort((a, b) => {
                const firstValue = a[columnKey];
                const secondValue = b[columnKey];
                let comparisonResult: number;
                if (firstValue < secondValue) comparisonResult = -1;
                else if (firstValue > secondValue) comparisonResult = 1;
                else comparisonResult = 0;
                return ascending ? comparisonResult : -comparisonResult;
            })
        );
    };

    const openModalWithContent = (type: string) => {
        setContentType(type);
        setOpenModal(true);
    };

    if (isLoading) {
        return (<div className="h-screen flex flex-col justify-center items-center gap-10">
            <h1 className="text-3xl text-center text-gray-400">Veuillez patienter</h1>
            <ColorRing
                visible
                height={140}
                width={140}
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>)
    }

    return (
        <section>
            <TopContent
                columnNames={columnNames}
                setVisibleColumns={setVisibleColumns}
                visibleColumns={visibleColumns}
                setSearch={setSearch}
                setCategory={setCategory}
                categories={categories}
                setCurrentPage={setCurrentPage}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                startDate={startDate}
                endDate={endDate}
                setClientType={setClientType}
                setUserId={setUserId}
                salesUsers={salesUsers}
                fournisseurId={fournisseurId}
                setFournisseurId={setFournisseurId}
                fournisseur={fournisseur}
                setEntrepot={setEntrepot}
                entrepots={entrepots}
                setEntrepotDepart={setEntrepotDepart}
                setEntrepotArrive={setEntrepotArrive}
            />

            {tableData?.length === 0 ? (
                <div className="h-screen flex flex-col justify-center items-center">
                    <p className="text-5xl text-center text-gray-500">Aucune donnée trouvée</p>
                    <p className="text-xl text-center text-gray-400 mt-4">Veuillez vérifier votre recherche</p>
                </div>
            ) : (
                <div className={`${isLoading ? "hidden" : ""}`}>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                {headerColumns?.map(({id, name, sort}) => {
                                    return (
                                        <TableHead key={id}>
                                            {sort ? (
                                                <Button variant="ghost" onClick={() => handleSort(name)}>
                                                    {name}
                                                    <Image src={icons.Trier} alt="Trier" width={20} height={20}/>
                                                </Button>
                                            ) : (
                                                name
                                            )}
                                        </TableHead>
                                    );
                                })}
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {tableData?.map((row, rowIndex) => (
                                <TableRow className="hover:bg-gray-50" key={rowIndex}>
                                    {headerColumns?.map(({name}, index) => {
                                        const renderCell = columnRenderers[name]

                                        return (
                                            <TableCell key={`${name}-${index}`} className={cn({
                                                'text-red-500': name === 'Quantité' && row['Quantité'] <= 0,
                                            })}>
                                                {getCellContent(renderCell ? renderCell(row, name) : row[name])}
                                            </TableCell>
                                        )
                                    })}

                                    <TableCell className="text-center flex items-center gap-1">
                                        <Image
                                            src={icons.ArrowDown}
                                            alt="Visible"
                                            height={20}
                                            width={20}
                                            onClick={() => {
                                                if (pathName.some((path) => path.name === pathname)) {
                                                    setInvoiceDetails(row)
                                                    openModalWithContent("table")
                                                }
                                            }}
                                        />
                                        <Image src={icons.Edit} alt="Edit" height={20} width={20}/>
                                        <Image src={icons.Trash} alt="Trash" height={20} width={20}/>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <PaginationTable
                        totalPages={totalPages ?? 0}
                        currentPage={currentPage ?? 1}
                        setCurrentPage={setCurrentPage ?? (() => {
                        })}
                    />
                    <ReusableSheet
                        open={openModal}
                        onClose={() => setOpenModal(false)}
                        title={
                            contentType === "table" ? `Détail du bon ${invoiceDetails['N° bon'] || invoiceDetails['N° facture']}` : ""
                        }
                        contentType={contentType}
                        contentProps={contentType === "table" ? {tableData} : {}}
                        invoiceDetails={invoiceDetails}
                    />
                </div>
            )}
        </section>
    );

    ;

};