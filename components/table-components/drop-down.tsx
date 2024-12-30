"use client";
import {useState } from 'react';
import { Column } from '@/types';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image, { StaticImageData } from 'next/image';
import { useStoreContext } from '@/lib/context/store';


interface DropdownProps {
  label?: string;
  icon?: string | StaticImageData;
  columns: Column[];
  handleColumnVisibilityChange?: (columnKey: string) => void;
  visibleColumns?: Set<string>;
  classNameTrigger?: string;
  classNameContent?: string;
  showLabel?: boolean;
  filterOptions?:Set<string>;
  enableRetrieveStore?:boolean
}

export const Dropdown = ({
  label = '',
  icon,
  columns,
  handleColumnVisibilityChange,
  visibleColumns,
  classNameTrigger = '',
  classNameContent = '',
  showLabel = false,
  filterOptions,
  enableRetrieveStore = false,
}: DropdownProps) => {
  
  const [selectedName, setSelectedName] = useState('');
  const [isNameVisible, setIsNameVisible] = useState(false);
  const {retrieveStore} = useStoreContext();
  const handleColumnToggle = (column: Column) => {
    handleColumnVisibilityChange?.(filterOptions?column?.name:column?.id);
    setSelectedName(column.name);
    setIsNameVisible(showLabel);
  };
  const handleRetrieveStore = (columnId: number,name:string) => {
    if (enableRetrieveStore && typeof window !== "undefined") {
      retrieveStore(columnId,name);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={classNameTrigger}
      >
        {isNameVisible ? selectedName : label} 
        {icon && <Image src={icon} alt="Arrow-Down" height={12} width={12} />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={classNameContent}>
        {columns?.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            checked={
              (visibleColumns?.has(column.id) || filterOptions?.has(column.name)) ?? false
            }
            onCheckedChange={() => handleColumnToggle(column)}
            onClick={()=>handleRetrieveStore(Number(column.id),column.name)}
          >
            {column.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
