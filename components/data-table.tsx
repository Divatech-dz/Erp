"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SheetDialog } from "./table-components";
import { icons } from "@/constants/icons";
import { actions } from "@/constants";
import { TableProps } from "@/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export const DataTable = ({ columnNames, columnData }: TableProps) => {
  const [visibleColumns, setVisibleColumns] = useState(
    new Set<string>(columnNames.map((col) => col.id))
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleColumnVisibilityChange = (columnKey: string) => {
    setVisibleColumns((prev) => {
      const newSet = new Set(prev);
      newSet.has(columnKey) ? newSet.delete(columnKey) : newSet.add(columnKey);
      return newSet;
    });
  };

  const headerColumns = useMemo(() => {
    return visibleColumns.size === columnNames.length
      ? columnNames
      : columnNames.filter((column) => visibleColumns.has(column.id));
  }, [columnNames, visibleColumns]);

 

  const openModal = () => {setIsOpen(!isOpen);};
  const closeModal = () => {setIsOpen(!isOpen);console.log('hello')};
  console.log(isOpen)
  return (
    <>
      <div className="w-full flex items-center justify-between mb-4">
        {/* Search Input */}
        <div className="relative flex items-center">
          <div className="absolute left-3">
            <Image src={icons.Search} alt="Search" width={16} height={16} />
          </div>
          <Input
            type="search"
            placeholder="Search ..."
            className="pl-10 rounded-xl max-w-80 bg-gray-100 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Column Visibility Dropdown */}
        {/* Uncomment below code if needed for column visibility */}
        {/* <Dropdown
          label="Columns"
          icon={icons.ArrowDown}
          columns={columnNames}
          handleColumnVisibilityChange={handleColumnVisibilityChange}
          visibleColumns={visibleColumns}
        /> */}
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            {headerColumns?.map(({ id, name, sort }) => (
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {columnData.map((row) => (
            <TableRow key={row["Référence"]}>
              {headerColumns.map((col) => (
                <TableCell key={`${row["Référence"]}-${col.id}`} className="text-center">
                  {row[col.name]}
                </TableCell>
              ))}
              <TableCell className="text-center">
                {/* Dropdown Menu for Actions */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="cursor-pointer text-blue-500">
                    Actions
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {actions.map(({ id, name }) => (
                      <DropdownMenuItem key={id} onClick={()=>openModal()}>
                        {name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      {/* Modal */}
      
      <SheetDialog OpenModal={isOpen} closeModal={closeModal} />
    </>
  );
};
