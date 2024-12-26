import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { PaginationTable, ReusableSheet, TopContent } from "./table-components";
import { icons } from "@/constants/icons";
import { TableProps } from "@/types";

const getCellContent = (row: Record<string, any>, colId: string) =>
    row[colId] !== "" ? row[colId] : "N/A";

export const DataTable = ({
                              columnNames,
                              columnData,
                              currentPage,
                              setCurrentPage,
                              totalPages,
                              setCategory,
                              setSearch,
                              categories
                          }: TableProps) => {
    const [visibleColumns, setVisibleColumns] = useState(
        new Set<string>(columnNames.map((col) => col.id))
    );
    const [tableData, setTableData] = useState(columnData);
    const [initialData, setInitialData] = useState(columnData);
    const [openModal, setOpenModal] = React.useState(false);
    const [contentType, setContentType] = React.useState<string>("table");
    const [sortedButton, setSortedButton] = useState<{
        column: string;
        ascending: boolean;
    }>({
        column: "",
        ascending: true,
    });

    useEffect(() => {
        setTableData(columnData);
        setInitialData(columnData);
    }, [columnData]);

    const headerColumns = useMemo(() => {
        return columnNames.filter((column) => visibleColumns.has(column.id));
    }, [columnNames, visibleColumns]);

    const handleSort = (columnKey: string) => {
        const ascending = sortedButton.column === columnKey ? !sortedButton.ascending : true;
        setSortedButton({ column: columnKey, ascending });

        setTableData((prevData) =>
            [...prevData].sort((a, b) => {
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

    return (
        <>
            <TopContent
                columnNames={columnNames}
                setVisibleColumns={setVisibleColumns}
                visibleColumns={visibleColumns}
                openModal={openModalWithContent}
                setTableData={setTableData}
                tableData={initialData}
                setSearch={setSearch}
                setCategory={setCategory}
                categories={categories}
                setCurrentPage={setCurrentPage}
            />
            <Table>
                <TableHeader>
                    <TableRow>
                        {headerColumns.map(({ id, name, sort }) => (
                            <TableHead key={id}>
                                {sort ? (
                                    <Button variant="ghost" onClick={() => handleSort(id.toString())}>
                                        {name}
                                        <Image src={icons.Trier} alt="Trier" width={20} height={20} />
                                    </Button>
                                ) : (
                                    name
                                )}
                            </TableHead>
                        ))}
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tableData?.map((row) => (
                        <TableRow key={row.id} className="hover:bg-gray-50">
                            {headerColumns.map((col: { id: string; name: string }) => {
                                let cellContent;
                                switch (col.name) {
                                    case "Référence":
                                        cellContent = <p>{row.reference}</p>;
                                        break;
                                    case "Désignation":
                                        cellContent = <p>{row.name}</p>;
                                        break;
                                    case "Quantité":
                                        cellContent = <p className={`${row.quantity_globale === 0 && "text-red-600"}`}>{row.quantity_globale}</p>;
                                        break;
                                    case "PV TTC -P-":
                                        cellContent = <p>{row.prix_vente} dzd</p>;
                                        break;
                                    case "PV TTC - R -":
                                        cellContent = <p>{row.prix_vente} dzd</p>;
                                        break;
                                    default:
                                        cellContent = <p>{getCellContent(row, col.id)}</p>;
                                        break;
                                }
                                return (
                                    <TableCell key={`${row.id}-${col.id}`}>
                                        {cellContent}
                                    </TableCell>
                                );
                            })}
                            <TableCell className="text-center flex items-center gap-1">
                                <Image
                                    src={icons.Visible}
                                    alt="Visible"
                                    height={20}
                                    width={20}
                                    onClick={() => openModalWithContent("table")}
                                />
                                <Image src={icons.Edit} alt="Edit" height={20} width={20} />
                                <Image src={icons.Trash} alt="Trash" height={20} width={20} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <PaginationTable
                totalPages={totalPages ?? 0}
                currentPage={currentPage ?? 1}
                setCurrentPage={setCurrentPage ?? (() => { })}
            />

            <ReusableSheet
                open={openModal}
                onClose={() => setOpenModal(false)}
                title={contentType === "table" ? "Invoice Details" : ""}
                contentType={contentType}
                contentProps={contentType === "table" ? { tableData } : {}}
            />
        </>
    );
};