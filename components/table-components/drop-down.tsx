"use client"


import { Column } from '@/types';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image, { StaticImageData } from 'next/image';





export const Dropdown = ({ columns, handleColumnVisibilityChange, visibleColumns,label,icon }: {
  label?: string;
  icon?: string | StaticImageData;
  columns: Column[],
  handleColumnVisibilityChange?: (columnKey: string) => void,
  visibleColumns?: Set<string>,
}) => {
  
  return (
   
    <DropdownMenu >
      <DropdownMenuTrigger 
      className='flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-black-2 font-medium bg-gray-50 hover:bg-gray-200 active:bg-gray-300 outline-none  shadow-md transition-all'>
        {label} {icon && <Image src={icon} alt="Arrow-Down" height={12} width={12}/>}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
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


