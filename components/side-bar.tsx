'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Footer from './footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function SideBar() {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const handleAccordionClick = (label: string) => {
    setActiveItem(prev => (prev === label ? null : label));
  };

  return (
    <section className="sidebar">
      <Link href={'/'} className="cursor-pointer items-center flex gap-2">
        <Image src={'/icons/logo.svg'} alt={'logo'} height={25} width={25} />
        <h1 className="sidebar-logo">DIVATECH</h1>
      </Link>
      <nav className="flex flex-col gap-4 h-2zzzzzzzz xl:h-[600px] overflow-y-scroll no-scrollbar">
        {sidebarLinks.map(({ imgURL, label, route }) => {
          const isActive = activeItem === label;
          return (
            <Accordion type="single" collapsible key={label}>
              <AccordionItem value="item-1">
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
                  <p>{label}</p>
                </AccordionTrigger>
                <AccordionContent>
                  {route.map(r => (
                    <Link key={r.name} href={r.link}>
                      {r.name}
                    </Link>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </nav>
      <Footer />
    </section>
  );
}
