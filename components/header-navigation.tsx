'use client';

import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { icons } from '@/constants/icons';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const HeaderNavigation = ({
  label,
  router,
  selected,
  onSelect,
}: {
  label: string;
  router: string[];
  selected: string | null;
  onSelect: (key: string) => void;
}) => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const pathName = usePathname();

  const handleRouteSelect = (route: string) => {
      setSelectedRoute(route);
       onSelect(label); 
  };
  const selectedLabel=pathName.slice(1)===label.toLowerCase()||selected === label
  

  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'flex items-center justify-between gap-2 capitalize rounded-xl px-4 py-2 w-fit font-medium outline-none shadow-md transition-all bg-blue-50 text-blue-700',
            { 'bg-erp-green-gradient text-white':  selectedLabel }
          )}
        >
          {selectedRoute ?? label}
          <Image src={icons.ArrowDown} alt="Arrow-Down" height={12} width={12} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {router.map((route) => {
             const isActiveRoute = pathName === `/${route}` || pathName.startsWith(`/${route}`);
            return (
              <DropdownMenuCheckboxItem
                key={route}
                onClick={() => handleRouteSelect(route)}
                checked={isActiveRoute}
              >
                <Link
                  href={'#'}
                  className={cn(
                    'font-semibold capitalize',
                    isActiveRoute ? 'text-blue-700' : 'text-black'
                  )}
                >
                  {route}
                </Link>
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};