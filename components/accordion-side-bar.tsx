'use client';

import { cn } from '@/lib/utils';
import { AccordionType } from '@/types';
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const AccordionSideBar = ({
  label,
  imgURL,
  id,
  isActive,
  route,
  handleAccordionClick,
}: AccordionType) => {
  const pathName = usePathname();
  return (
    <AccordionItem value={id} key={id} className="py-2">
      <AccordionTrigger
        className={cn('sidebar-link text-black-1 md:px-3 md:py-2', {
          'bg-erp-gradient text-white md:p-3': isActive,
        })}
        onClick={() => handleAccordionClick(label)}
      >
        <div className="size-6 relative">
          <Image
            src={imgURL}
            fill
            alt={label}
            className={cn({ 'brightness-[3] invert-0': isActive })}
          />
        </div>
        <p className="text-left w-32">{label}</p>
      </AccordionTrigger>
      <AccordionContent>
        {route.map(r => {
          const fullRoute = `/${label}${r.link}`;
          const isActiveRoute =
            pathName === fullRoute || pathName.startsWith(fullRoute);

          return (
            <Link
              key={r.name}
              href={`/${label}/${r.link}`}
              className={cn(' text-black-1 hover:text-blue-1000 ', {
                'text-blue-1000': isActiveRoute,
              })}
            >
              {r.name}
            </Link>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionSideBar;
