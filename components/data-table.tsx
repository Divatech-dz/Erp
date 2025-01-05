
"use client"
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
  categories,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setUserId,
  salesUsers,
}: TableProps) => {
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

  useEffect(() => {
    setTableData(columnData ?? []);
  }, [columnData]);

  const headerColumns = useMemo(() => {

    return columnNames?.filter((column) => visibleColumns.has(column.id));
  }, [columnNames, visibleColumns]);
  const handleSort = (columnKey: string) => {
    const ascending = sortedButton.column === columnKey ? !sortedButton.ascending : true;
    setSortedButton({ column: columnKey, ascending });

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

  return (
    <>
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
        setUserId={setUserId}
        salesUsers={salesUsers}
      />
      <Table>
        <TableHeader>
          <TableRow>
            {headerColumns?.map(({ id, name, sort }) => {
              const [key, value] = Object.entries(name)[0];
              return (
                <TableHead key={id} >
                  {sort ? (
                    <Button variant="ghost" onClick={() => handleSort(value)}>
                      {key}
                      <Image src={icons.Trier} alt="Trier" width={20} height={20} />
                    </Button>
                  ) : (
                    <>{key}</>
                  )}
                </TableHead>
              );
            })}
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tableData?.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-50" >
              {headerColumns?.map(({id, name}) => {
               const [,value] = Object.entries(name)[0];
                return (
                  <TableCell key={`${row?.id}-${id}`} >
                   {getCellContent(row, value)}
                  </TableCell>
                );
              })}
              <TableCell className="text-center flex items-center gap-1">
                <Image
                  src={icons.ArrowDown}
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
        setCurrentPage={setCurrentPage ?? (() => {
        })}
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