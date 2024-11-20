import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Dropdown } from "./drop-down";
import { icons } from "@/constants/icons";
import { Button } from "@/components/ui/button";
import { rowsType } from "@/types";


interface TopContentProps {
  setVisibleColumns: React.Dispatch<React.SetStateAction<Set<string>>>;
  visibleColumns: Set<string>;
  columnNames: rowsType[]; 
}

export const TopContent: React.FC<TopContentProps> = ({
  setVisibleColumns,
  columnNames,
  visibleColumns,
}) => {
 
  const handleColumnVisibilityChange = (columnKey: string) => {
    setVisibleColumns((prev) => {
      const newSet = new Set(prev);
      if (newSet.size === 1 && newSet.has(columnKey)) {
        return newSet;
      }
      if (newSet.has(columnKey)) {
        newSet.delete(columnKey);
      } else {
        newSet.add(columnKey);
      }
      return newSet;
    });
  };

  return (
    <div className="w-full flex items-center justify-between mb-4">
     
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

      
      <div className="flex items-center gap-3">
      
        <Dropdown
          label="Columns"
          icon={icons.ArrowDown}
          columns={columnNames}
          handleColumnVisibilityChange={handleColumnVisibilityChange}
          visibleColumns={visibleColumns}
        />

        
        <Button className="flex-center rounded-xl px-4 py-2 text-16 w-32 border border-bankGradient bg-erp-gradient font-semibold text-white shadow-form hover:bg-gray-200 active:bg-gray-300 outline-none transition-all">
          <Image src={icons.Filter} width={20} height={20} alt="Filter" /> Filter
        </Button>
      </div>
    </div>
  );
};
