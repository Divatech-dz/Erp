/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, {useMemo, useState} from "react";
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
import {PaginationTable, ReusableSheet, TopContent} from "./table-components";
import {icons} from "@/constants/icons";
import {TableProps} from "@/types";

export const DataTable = ({columnNames, columnData, currentPage, setCurrentPage, totalPages}: TableProps) => {
    const [visibleColumns, setVisibleColumns] = useState(
        new Set<string>(columnNames.map((col) => col.id))
    );

    const [tableData, setTableData] = useState(columnData);
    const [openModal, setOpenModal] = React.useState(false);
    const [contentType, setContentType] = React.useState<string>("table");
    const [sortedButton, setSortedButton] = useState<{
        column: string;
        ascending: boolean;
    }>({
        column: "",
        ascending: true,
    });

    const headerColumns = useMemo(() => {
        return columnNames.filter((column) => visibleColumns.has(column.id));
    }, [columnNames, visibleColumns]);

    const handleSort = (columnKey: string) => {

        const ascending = sortedButton.column === columnKey ? !sortedButton.ascending : true;
        setSortedButton({column: columnKey, ascending});

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
        if (setCurrentPage) {
            setCurrentPage(1);
        }
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
                tableData={tableData}
            />
            <Table>
                <TableHeader>
                    <TableRow>
                        {headerColumns.map(({id, name, sort}) => (
                            <TableHead className="text-center gap-2" key={id}>
                                {sort ? (
                                    <Button variant="ghost" onClick={() => handleSort(name)}>
                                        {name}
                                        <Image src={icons.Trier} alt="Trier" width={20} height={20}/>
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
                    {columnData?.map((product: any) => (
                        <TableRow key={product.id} className="hover:bg-gray-50">
                            <TableCell>
                                {product.reference}
                            </TableCell>
                            <TableCell>
                                {product.name}
                            </TableCell>
                            <TableCell>
                                {product.stock[0].quantity}
                            </TableCell>
                            <TableCell>
                                {product.prix_vente} dzd
                            </TableCell>
                            <TableCell className="text-center flex items-center gap-1">
                                <Image
                                    src={icons.Visible}
                                    alt="Visible"
                                    height={20}
                                    width={20}
                                    onClick={() => openModalWithContent("table")}
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
                title={contentType === "table" ? "Invoice Details" : ""}
                contentType={contentType}
                contentProps={contentType === "table" ? {tableData} : {}}
            />
        </>
    );
};
