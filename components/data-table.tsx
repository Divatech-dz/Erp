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
import { SheetDialog, TopContent } from "./table-components";
import { icons } from "@/constants/icons";
import { TableProps } from "@/types";
import { Checkbox } from "./ui/checkbox";


const reRenderCell = (row: Record<string, any>, colId: string) => row[colId] || "N/A";

export const DataTable = ({ columnNames, columnData }: TableProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [visibleColumns, setVisibleColumns] = useState(
    new Set<string>(columnNames.map((col) => col.id))
  );

  const toggleRowSelection = (rowId: string) => {
    setSelectedRows((prev) =>
      prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]
    );
  };


  const headerColumns = useMemo(() => {
    return columnNames.filter((column) => visibleColumns.has(column.id));
  }, [columnNames, visibleColumns]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
     
      <TopContent
        columnNames={columnNames}
        setVisibleColumns={setVisibleColumns}
        visibleColumns={visibleColumns}
      />

     
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center">
              
            </TableHead>
            {headerColumns.map(({ id, name, sort }) => (
              <TableHead className="text-center gap-2" key={id}>
                {sort ? (
                  <Button variant="ghost">
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
          {columnData.map((row) => (
            <TableRow key={row["Référence"]} className="hover:bg-gray-50">
              
              <TableCell className="text-center">
                <Checkbox
                  checked={selectedRows.includes(row["Référence"])}
                  onCheckedChange={() => toggleRowSelection(row["Référence"])}
                />
              </TableCell>

             
              {headerColumns.map((col) => (
                <TableCell key={`${row["Référence"]}-${col.id}`} className="text-center">
                  {reRenderCell(row, col.name)}
                </TableCell>
              ))}

            
              <TableCell className="text-center flex items-center gap-1">
                <Image src={icons.Visible} alt="Visible" height={20} width={20} onClick={openModal} />
                <Image src={icons.Edit} alt="Edit" height={20} width={20} />
                <Image src={icons.Trash} alt="Trash" height={20} width={20} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    
      <SheetDialog OpenModal={isOpen} closeModal={closeModal} />
    </>
  );
};
