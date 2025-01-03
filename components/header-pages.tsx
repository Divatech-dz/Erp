"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { icons } from "@/constants/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const HeaderPages = ({ label, router }: { label: string; router: string[]; }) => {
  const [selectedName, setSelectedName] = useState<string | null>(null); 

  const handleChecked = (column: string) => {
    if (selectedName === column) {
      
      setSelectedName(null);
    } else {
      setSelectedName(column); 
    }
  };

  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "flex items-center justify-between gap-2 rounded-xl px-4 py-2 w-fit font-medium outline-none shadow-md transition-all bg-blue-50 text-blue-700",
            { "bg-erp-green-gradient text-white": selectedName } 
          )}
        >
          {selectedName ?? label} 
          <Image src={icons.ArrowDown} alt="Arrow-Down" height={12} width={12} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {router.map((column, index) => (
            <DropdownMenuCheckboxItem
              key={index}
              onCheckedChange={() => handleChecked(column)}
              checked={selectedName === column} 
            >
              <p
                className={cn(
                  selectedName === column ? "text-blue-700 font-semibold" : "text-black font-semibold"
                )}
              >
                {column}
              </p>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
