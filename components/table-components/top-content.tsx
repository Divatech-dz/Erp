'use client';

import Image from 'next/image';
import React from 'react';
import { Input } from '../ui/input';
import { Dropdown } from './drop-down';
import { icons } from '@/constants/icons';
import { Button } from '@/components/ui/button';
import { rowsType } from '@/types';
import { usePathname,useRouter } from 'next/navigation';






interface TopContentProps {
  setVisibleColumns: React.Dispatch<React.SetStateAction<Set<string>>>;
  visibleColumns: Set<string>;
  columnNames: rowsType[];
  openModal: (name: string) => void;
}

export const TopContent: React.FC<TopContentProps> = ({
  setVisibleColumns,
  columnNames,
  visibleColumns,
  openModal
}) => {
  const pathname = usePathname();
  const router = useRouter();

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

  const rerenderButtons = () => {
    switch (pathname) {
      case '/navbar-Links/Admin/utilisateurs':
        return (
          <Button 
          className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white transition-all 
                     w-52 bg-gray-800 border border-gray-600 shadow-md hover:bg-gray-700 hover:shadow-lg active:bg-gray-600 
                     focus:outline-none "
                     onClick={()=>router.push('/Admin/add-user')}
                     
        >
          <Image src={icons.Plus} width={20} height={20} alt="Add User" />
          Ajouter utilisateurs
        </Button>
        
        );

      case '/navbar-Links/Produits/produits':
        return (
          <>
            <Dropdown
              label="Columns"
              icon={icons.ArrowDown}
              columns={columnNames}
              handleColumnVisibilityChange={handleColumnVisibilityChange}
              visibleColumns={visibleColumns}
              classNameTrigger="px-4 py-2 w-full md:w-1/2 text-gray-700 font-medium bg-gray-50 hover:bg-gray-200 active:bg-gray-300 outline-none shadow-md transition-all"
            />
            <Button className="filter-button border-bankGradient bg-erp-gradient hover:bg-gray-200 active:bg-gray-300" onClick={() => openModal('filter')}>
              <Image src={icons.Filter} width={20} height={20} alt="Filter" /> Filter
            </Button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full flex items-center justify-between mb-4">
      <div className="relative flex items-center gap-2">
        <div className="absolute left-3">
          <Image src={icons.Search} alt="Search" width={16} height={16} />
        </div>
        <Input
          type="search"
          placeholder="Search ..."
          className="pl-10 rounded-xl max-w-80 bg-gray-100 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Image src={icons.Excel} height={25} width={25} alt='Excel' />
      </div>

      <div className="flex items-center gap-3">{rerenderButtons()}</div>
     
      
    
    </div>
  );
};
