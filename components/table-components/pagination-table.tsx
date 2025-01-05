"use client";
import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '../ui/pagination'
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PaginationTable = ({currentPage, setCurrentPage, totalPages}: {

    totalPages: number, currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}) => {


    return (
        <Pagination className="my-5 flex justify-end items-center space-x-2">
            <Select onValueChange={(value) => setCurrentPage(Number(value))}>
                <SelectTrigger className="w-20 h-10">
                    <SelectValue placeholder="Page"/>
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectGroup>
                        <SelectLabel>Pages</SelectLabel>
                        {Array.from({length: totalPages}, (_, i) => i + 1).map((page) => (
                            <SelectItem key={page} value={page.toString()}>
                                {page}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
            <PaginationContent className="flex items-center space-x-1">
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink
                        href="#"
                        className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
                    >
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>

                {currentPage < totalPages && (
                    <PaginationItem>
                        <PaginationEllipsis
                            className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
                        />
                    </PaginationItem>
                )}

                {currentPage < totalPages && (
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
                            onClick={() => setCurrentPage(totalPages)}
                        >
                            {totalPages}
                        </PaginationLink>
                    </PaginationItem>
                )}

                <PaginationItem>
                    <PaginationNext
                        href="#"
                        className="px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition"
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
