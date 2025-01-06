'use client';

import Image from 'next/image';
import React, {useState} from 'react';
import {Input} from '../ui/input';
import {Dropdown} from './drop-down';
import {icons} from '@/constants/icons';
import {Button} from '@/components/ui/button';
import {rowsType} from '@/types';
import {usePathname, useRouter} from 'next/navigation';

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
    columnNames?: rowsType[],
    tableData?: Record<string, any>[],
    setCategory?: React.Dispatch<React.SetStateAction<number>>,
    categories?: Array<{ id: string; category: string }>,
    setCurrentPage?: React.Dispatch<React.SetStateAction<number>>,
    setSearch?: ((value: (((prevState: string) => string) | string)) => void) | undefined,
    startDate?: string,
    setStartDate?: React.Dispatch<React.SetStateAction<string>>,
    endDate?: string,
    setEndDate?: React.Dispatch<React.SetStateAction<string>>,
    clientType?: string,
    setClientType?: React.Dispatch<React.SetStateAction<string>>,
    setUserId?: React.Dispatch<React.SetStateAction<number>>,
    salesUsers?: any[]
}

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
        const router = useRouter();

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
            if (value !== '') {
                if (setSearch) {
                    setSearch('');
                    setValue('')
                }
                if (setCurrentPage) {
                    setCurrentPage(1)
                }
            }
        };

        const rerenderButtons = () => {
            switch (pathname) {
                case '/utilisateurs':
                    return (
                        <>
                            <Button
                                className="flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold text-white transition-all
                     w-52 bg-gray-800 border border-gray-600 shadow-md hover:bg-gray-700 hover:shadow-lg active:bg-gray-600 
                     focus:outline-none "
                                onClick={() => router.push('/navbar-Links/Admin/add-user')}
                            >
                                <Image src={icons.Plus} width={20} height={20} alt="Add User"/>
                                Ajouter utilisateurs
                            </Button>
                        </>
                    );

                case '/produits':
                    return (
                        <>
                            <Dropdown
                                label="Columns"
                                icon={icons.ArrowDown}
                                columns={columnNames}
                                handleColumnVisibilityChange={handleColumnVisibilityChange}
                                visibleColumns={visibleColumns}
                                classNameTrigger='flex h-10 w-full items-center  justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'
                            />
                            <Select onValueChange={(value) => {
                                setCategory?.(Number(value));
                                setCurrentPage?.(1)
                            }}>
                                <SelectTrigger className="w-[180px] h-10">
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
                        </>
                    );

                case '/bonsCommandeVente' :
                case '/Facture':
                case '/bonsRetourVente':
                    return (
                        <>
                            <div className="mb-6 relative">
                                <label>Date de début:</label>
                                <Input
                                    type="date"
                                    value={startDate}
                                    className="rounded-md w-40 bg-gray-100 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => {
                                        setStartDate?.(e.target.value);
                                        setCurrentPage?.(1)
                                    }}/>
                                <button className="absolute right-0.5 top-9" onClick={() => setStartDate?.("")}>
                                    <Image src={icons.remove} alt="remove" width={16} height={16}/>
                                </button>
                            </div>
                            <div className="mb-6 relative">
                                <label>Date de fin:</label>
                                <Input
                                    type="date"
                                    value={endDate}
                                    className="rounded-md w-40 bg-gray-100 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => {
                                        setEndDate?.(e.target.value);
                                        setCurrentPage?.(1)
                                    }}
                                />
                                <button className="absolute right-0.5 top-9" onClick={() => setEndDate?.("")}>
                                    <Image src={icons.remove} alt="remove" width={16} height={16}/>
                                </button>
                            </div>
                            <Select onValueChange={(value) => {
                                setUserId?.(Number(value));
                                setCurrentPage?.(1)
                            }}>
                                <SelectTrigger className="w-[100px] h-10">
                                    <SelectValue placeholder="Filtrer par utilisateur"/>
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectGroup>
                                        <SelectLabel>Utilisateurs</SelectLabel>
                                        <SelectItem value=" ">
                                            TOUS
                                        </SelectItem>
                                        {salesUsers?.map((user) =>
                                            <SelectItem key={user?.id} value={user?.id}>
                                                {user?.username?.toUpperCase()}
                                            </SelectItem>
                                        )}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Dropdown
                                label="Columns"
                                icon={icons.ArrowDown}
                                columns={columnNames}
                                handleColumnVisibilityChange={handleColumnVisibilityChange}
                                visibleColumns={visibleColumns}
                                classNameTrigger='flex h-10 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'
                            />
                        </>
                    );

                case '/listeClients':
                    return (
                        <>
                            <Select onValueChange={(value) => {
                                setClientType?.(value);
                                setCurrentPage?.(1)
                            }}>
                                <SelectTrigger className="w-[100px] h-10">
                                    <SelectValue placeholder="Filtrer par Type"/>
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectGroup>
                                        <SelectLabel>Clients</SelectLabel>
                                        <SelectItem value=" ">
                                            TOUS
                                        </SelectItem>
                                        <SelectItem value="Revendeur">
                                            Revendeur
                                        </SelectItem>
                                        <SelectItem value="Client Final">
                                            Client Final
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Select onValueChange={(value) => {
                                setUserId?.(Number(value));
                                setCurrentPage?.(1)
                            }}>
                                <SelectTrigger className="w-[100px] h-10">
                                    <SelectValue placeholder="Filtrer par utilisateur"/>
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectGroup>
                                        <SelectLabel>Utilisateurs</SelectLabel>
                                        <SelectItem value=" ">
                                            TOUS
                                        </SelectItem>
                                        {salesUsers?.map((user) =>
                                            <SelectItem key={user?.id} value={user?.id}>
                                                {user?.username?.toUpperCase()}
                                            </SelectItem>
                                        )}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </>
                    )
                default:
                    return null;
            }
        };

        return (
            <div className="w-full flex items-center gap-8 my-2">
                <div className="relative flex items-center gap-2 mx-2" onKeyDown={pressKey}>
                    <button className="absolute -right-6" onClick={() => handleSearch(value)}>
                        <Image src={icons.Search} alt="Search" width={20} height={20}/>
                    </button>
                    <Input
                        type="text"
                        placeholder="Rechercher"
                        value={value}
                        className="rounded-md w-60 bg-gray-100 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button className="absolute right-3" onClick={handleClear}>
                        <Image src={icons.remove} alt="remove" width={16} height={16}/>
                    </button>
                </div>
                <div className="flex items-center gap-3 ">{rerenderButtons()}</div>
                <Image src={icons.Excel} height={25} width={25} alt='Excel'/>
            </div>
        );
    }
;
