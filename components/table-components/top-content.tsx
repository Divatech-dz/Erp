'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import {Input} from '../ui/input';
import {Dropdown} from './drop-down';
import {icons} from '@/constants/icons';
import {Button} from '@/components/ui/button';
import {rowsType} from '@/types';
import {usePathname, useRouter} from 'next/navigation';
import {StatusOptions} from '@/constants';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";


interface TopContentProps {
    setVisibleColumns: React.Dispatch<React.SetStateAction<Set<string>>>,
    visibleColumns: Set<string>,
    columnNames: rowsType[],
    openModal: (name: string) => void,
    setTableData?: React.Dispatch<React.SetStateAction<Record<string, any>[]>>,
    tableData?: Record<string, any>[],
    setCategory?: React.Dispatch<React.SetStateAction<number>>,
    categories: Record<string, any>[],
    setCurrentPage?: React.Dispatch<React.SetStateAction<number>>,
    setSearch?: ((value: (((prevState: string) => string) | string)) => void) | undefined
}

export const TopContent: React.FC<TopContentProps> = ({
                                                          setVisibleColumns,
                                                          columnNames,
                                                          visibleColumns,
                                                          openModal,
                                                          setCurrentPage,
                                                          setCategory,
                                                          categories,
                                                          setSearch
                                                      }) => {
        const [visibleFilter, setVisibleFilter] = useState(
            new Set<string>(StatusOptions.map((col) => col.name))
        );
        const [value, setValue] = useState('');
        const pathname = usePathname();
        const router = useRouter();
        const displayedCategories = new Set();

        const handleColumnVisibilityChange = (columnKey: string) => {
            setVisibleColumns((prev) => {
                const newSet = new Set(prev);
                if (newSet.size === 1 && newSet.has(columnKey)) {
                    return newSet;
                }
                if (newSet.has(columnKey)) {
                    newSet.delete(columnKey)
                } else {
                    newSet.add(columnKey);
                }
                return newSet;
            });
        };

        const handleSearch = (value: string) => {
            if (value !== '') {
                setSearch?.(value);
                setCurrentPage?.(1)
            }
        };


        /*const handleCategory = (value: React.ChangeEvent<HTMLInputElement>) => {
            if (value !== '') {
                setCategory(value);
            }
        };*/


        const handleClear = () => {
            if (value !== '') {
                if (setSearch) {
                    setSearch('');
                }
                if (setCurrentPage) {
                    setCurrentPage(1)
                }
            }
        };

        const filteredItems = (columnKey: string) => {
            setVisibleFilter((prev) => {
                const newSet = new Set(prev);
                if (newSet.has(columnKey)) {
                    newSet.delete(columnKey);
                } else {
                    newSet.add(columnKey);
                }
                return new Set(newSet);
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
                            onClick={() => router.push('/navbar-Links/Admin/add-user')}
                        >
                            <Image src={icons.Plus} width={20} height={20} alt="Add User"/>
                            Ajouter utilisateurs
                        </Button>
                    );

                case '/admin/Produits/produits':
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
                            <Button
                                className="filter-button border-bankGradient bg-erp-gradient hover:bg-gray-200 active:bg-gray-300"
                                onClick={() => openModal('filter')}>
                                <Image src={icons.Filter} width={20} height={20} alt="Filter"/>
                            </Button>
                        </>
                    );

                default:
                    return null;
            }
        };

        return (
            <div className="w-full flex items-center gap-8 my-2">
                <div className="relative flex items-center gap-2 mx-2">
                    <button className="absolute -right-6" onClick={() => handleSearch(value)}>
                        <Image src={icons.Search} alt="Search" width={16} height={16}/>
                    </button>
                    <Input
                        type="text"
                        placeholder="Nom ou référence du produit"
                        value={!value ? '' : value}
                        className="rounded-md w-60 bg-gray-100 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className="absolute right-3" onClick={handleClear}>
                        <Image src={icons.remove} alt="remove" width={16} height={16}/>
                    </button>
                </div>
                <Select onValueChange={(value) => {
                    setCategory?.(Number(value));
                    setCurrentPage?.(1)
                }}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filtrer par catégorie"/>
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectGroup>
                            <SelectLabel>Catégories</SelectLabel>
                            <SelectItem value=" ">
                                TOUTES
                            </SelectItem>
                            {categories?.map((category) =>
                                <SelectItem key={category.id} value={category.id}>
                                    {category.category.toUpperCase()}
                                </SelectItem>
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Image src={icons.Excel} height={25} width={25} alt='Excel'/>
                <div className="flex items-center gap-3 ">{rerenderButtons()}</div>
            </div>
        );
    }
;
