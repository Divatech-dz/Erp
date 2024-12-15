"use client";
import React from 'react'
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '../ui/pagination'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PaginationTable = ({currentPage,setCurrentPage,totalPages}:{
  
  totalPages:number,currentPage:number,setCurrentPage: React.Dispatch<React.SetStateAction<number>>}) => {

  
  return (
    <Pagination className="mt-4 flex justify-end items-center space-x-2">
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
