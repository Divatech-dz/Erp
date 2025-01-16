'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import {Input} from '../ui/input';
import {icons} from '@/constants/icons';
import {ComponentsConfig, ComponentsRegistryKey, TopContentProps} from '@/types';
import {usePathname, useRouter} from 'next/navigation';
import componentsRegistry from '../componentsRegistry';

export const TopContent: React.FC<TopContentProps> = ({
                                                          setVisibleColumns,
                                                          columnNames,
                                                          visibleColumns,
                                                          setCurrentPage,
                                                          setCategory,
                                                          categories,
                                                          setSearch,
                                                          startDate,
                                                          setStartDate,
                                                          endDate,
                                                          setEndDate,
                                                          setClientType,
                                                          setUserId,
                                                          salesUsers
                                                      }) => {

        const [value, setValue] = useState('');
        const pathname = usePathname();
        const router = useRouter()

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

        const pressKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                handleSearch(value);
            }
        }

        const handleClear = () => {
            if (setSearch) {
                setSearch('');
                setValue('')
                if (setCurrentPage) {
                    setCurrentPage(1)
                }
            }
        };

        const config: ComponentsConfig = {
            router,
            columnNames,
            handleColumnVisibilityChange,
            visibleColumns,
            categories,
            setCategory,
            setCurrentPage,
            setStartDate,
            setEndDate,
            startDate,
             endDate
        };

        const renderButtons = () => {
            const key = pathname.replace('/', '');
            const registry = componentsRegistry(config);
            const Component = registry[key as ComponentsRegistryKey];
            return Component ? Component() : null;
        };

        return (
            <div className="w-full flex items-center gap-4 my-2">
                <div className="relative flex items-center w-60" onKeyDown={pressKey}>
                    <button
                        className="absolute left-2"
                        onClick={() => handleSearch(value)}
                    >
                        <Image src={icons.Search} alt="Search" width={20} height={20}/>
                    </button>
                    <Input
                        type="text"
                        placeholder="Rechercher"
                        value={value}
                        className="w-full pl-8 pr-10 h-10 bg-gray-100 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setValue(e.target.value)}
                    />

                    <button
                        className="absolute right-2"
                        onClick={handleClear}
                    >
                        <Image src={icons.remove} alt="Clear" width={16} height={16}/>
                    </button>
                </div>

                <button
                    className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-md border border-gray-300 hover:bg-gray-200"
                >
                    <Image src={icons.Excel} height={20} width={20} alt="Excel"/>
                </button>

                <div className="flex items-center gap-3">{renderButtons()}</div>
            </div>

        );
    }
;
