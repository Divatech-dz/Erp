
"use client"

import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu'
import { icons } from '@/constants/icons'
import Image from 'next/image'

export const HeaderPages=() =>{
  const [selectedName, setSelectedName] = useState('');
  const [isNameVisible, setIsNameVisible] = useState(false);
  const handelChecked=(column:string)=>{
    setIsNameVisible(!isNameVisible)
    setSelectedName(column)
  }
  return (
    <header className="w-full py-2 mb-4 flex justify-center items-center">
  <div className="flex justify-between items-center max-w-7xl mx-auto px-4 gap-3">
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center justify-between gap-2 rounded-xl px-4 py-2 w-fit  font-medium 
          outline-none shadow-md transition-all bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200
"
      >
        {isNameVisible ? selectedName : "Product"}  <Image src={icons.ArrowDown} alt="Arrow-Down" height={12} width={12} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {['list Produit'].map((column) => (
          <DropdownMenuCheckboxItem key={0}  onCheckedChange={() => handelChecked(column)} checked={isNameVisible} 
          >
            <p className={`${isNameVisible?"text-blue-700 font-semibold":"text-black font-semibold"}`}>{column}</p>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>

  </div>
</header>
  )
}


