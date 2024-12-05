"use client"


import { Column } from '@/types';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image, { StaticImageData } from 'next/image';





export const Dropdown = ({ columns, handleColumnVisibilityChange, visibleColumns,label,icon,classNameTrigger,classNameContent }: {
  label?: string;
  icon?: string | StaticImageData;
  columns: Column[],
  handleColumnVisibilityChange?: (columnKey: string) => void,
  visibleColumns?: Set<string>,
  classNameTrigger?:string,
  classNameContent?:string
}) => {
  
  
  return (
   
    <DropdownMenu >
      <DropdownMenuTrigger 
     className={`flex items-center justify-between gap-2 rounded-xl ${classNameTrigger}`}
>
        {label} {icon && <Image src={icon} alt="Arrow-Down" height={12} width={12}/>}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={classNameContent}>
        {columns.map((column) => (
          <DropdownMenuCheckboxItem
            key={column?.id}
            checked={visibleColumns?.has(column?.id)}
            onCheckedChange={()=>handleColumnVisibilityChange?.(column.id)}
          >
            {column?.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}