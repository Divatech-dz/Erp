/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { PaginationTable, ReusableSheet, TopContent } from "./table-components";
import { icons } from "@/constants/icons";
import { TableProps } from "@/types";


const reRenderCell = (row: Record<string, any>, colId: string) =>
  row[colId] !== "" ? row[colId] : "N/A";

export const DataTable = ({ columnNames, columnData }: TableProps) => {
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
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; 
  const totalPages = Math.ceil(tableData.length / pageSize);

  const handleSort = (name: string) => {
    setSortedButton({ ascending: !sortedButton.ascending, column: name });
    setTableData((prevData) =>
      [...prevData].sort((a, b) => {
        const first = a[sortedButton.column];
        const second = b[sortedButton.column];
        let cmp: number;
        if (first < second) {
          cmp = -1;
        } else if (first > second) {
          cmp = 1;
        } else {
          cmp = 0;
        }
        return sortedButton.ascending ? cmp : -cmp;
      })
    );
  };

  
  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return tableData.slice(startIndex, endIndex);
  }, [currentPage, tableData]);

  const openModalWithContent = (type: string) => {
    setContentType(type);
    setOpenModal(true);
  };

  const headerColumns = useMemo(() => {
    return columnNames.filter((column) => visibleColumns.has(column.id));
  }, [columnNames, visibleColumns]);

  const invoices = [
    { invoice: "INV001", paymentStatus: "Paid", paymentMethod: "Credit Card", totalAmount: "$100.00" },
  ];

  return (
    <>
      <TopContent
        columnNames={columnNames}
        setVisibleColumns={setVisibleColumns}
        visibleColumns={visibleColumns}
        openModal={openModalWithContent}
      />

      <Table>
        <TableHeader>
          <TableRow>
            {headerColumns.map(({ id, name, sort }) => (
              <TableHead className="text-center gap-2" key={id}>
                {sort ? (
                  <Button variant="ghost" onClick={() => handleSort(name)}>
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
          {currentData.map((row) => (
            <TableRow
              key={row["Référence"]}
              className={`hover:bg-gray-50 ${row["Quantité"] <= 0 ? "bg-red-400" : ""}`}
            >
              {headerColumns.map((col: { id: string; name: string }) => (
                <TableCell key={`${row["Référence"]}-${col.id}`} className="text-center">
                  {reRenderCell(row, col.name)}
                </TableCell>
              ))}

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

      <PaginationTable totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>

      <ReusableSheet
        open={openModal}
        onClose={() => setOpenModal(false)}
        title={contentType === "table" ? "Invoice Details" : ""}
        contentType={contentType}
        contentProps={contentType === "table" ? { invoices } : {}}
      />
    </>
  );
};
