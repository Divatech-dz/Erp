'use client';

import React, { useEffect, useState } from 'react';
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
}: {
  label: string;
  router: string[];
}) => {
  const pathName = usePathname();
  const [selectedRoute, setSelectedRoute] = useState<string | null>(
    () => localStorage.getItem('selectedRoute')
  );

  useEffect(() => {
    if (selectedRoute) {
      localStorage.setItem('selectedRoute', selectedRoute);
    }
  }, [selectedRoute]);

  const handleRouteSelect = (route: string) => {
    setSelectedRoute(route);
    localStorage.setItem('selectedRoute', route);
  };

  const getDropdownLabel = () =>
    pathName.slice(1) === selectedRoute ? selectedRoute : label;

  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'flex items-center justify-between gap-2 capitalize rounded-xl px-4 py-2 w-fit font-medium outline-none shadow-md transition-all bg-blue-50 text-blue-700',
            {
              'bg-erp-green-gradient text-white': pathName.slice(1) === selectedRoute,
            }
          )}
        >
          {getDropdownLabel()}
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
                  href={`/${route}`}
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
