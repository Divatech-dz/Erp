'use client';

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { icons } from "@/constants/icons";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const HeaderNavigation = ({
  label,
  router,
  selected,
  onSelect
}: { 
  label: string; 
  router: string[]; 
  selected: string | null; 
  onSelect: (key: string) => void 
}) => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);

  const handleRouteSelect = (route: string) => {
    if (selectedRoute === route) {
      setSelectedRoute(null);
    } else {
      setSelectedRoute(route);
    }
  };

  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            "flex items-center justify-between gap-2 rounded-xl px-4 py-2 w-fit font-medium outline-none shadow-md transition-all bg-blue-50 text-blue-700",
            { "bg-erp-green-gradient text-white": selected === label }
          )}
        >
          {selectedRoute ?? label}
          <Image src={icons.ArrowDown} alt="Arrow-Down" height={12} width={12} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {router.map((route, index) => (
            <DropdownMenuCheckboxItem
              key={index}
              onCheckedChange={() => {
                handleRouteSelect(route);
                onSelect(label);
              }}
              checked={selectedRoute === route}
            >
              <p
                className={cn(
                  selectedRoute === route ? "text-blue-700 font-semibold" : "text-black font-semibold"
                )}
              >
                {route}
              </p>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
