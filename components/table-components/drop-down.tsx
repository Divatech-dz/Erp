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
  filterOptions
}: DropdownProps) => {
  
  const [selectedName, setSelectedName] = useState('');
  const [isNameVisible, setIsNameVisible] = useState(false);
  const handleColumnToggle = (column: Column) => {
    handleColumnVisibilityChange?.(filterOptions?column?.name:column?.id);
    setSelectedName(column.name);
    setIsNameVisible(showLabel);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`flex items-center justify-between gap-2 ${classNameTrigger}`}
      >
        {isNameVisible ? selectedName : label} 
        {icon && <Image src={icon} alt="Arrow-Down" height={12} width={12} />}
      </DropdownMenuTrigger>
      <DropdownMenuContent className={classNameContent}>
        {columns.map((column) => (
          <DropdownMenuCheckboxItem
            key={column.id}
            checked={
              (visibleColumns?.has(column.id) || filterOptions?.has(column.name)) ?? false
            }
            onCheckedChange={() => handleColumnToggle(column)}
          >
            {column.name}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
