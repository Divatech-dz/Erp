'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { icons } from '@/constants/icons';
import { Footer } from './footer';

export const MobileNav = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleAccordionClick = (label: string) => {
    setActiveItem(prev => (prev === label ? null : label));
  };
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white ">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-3 px-4"
          >
            <Image
              src={icons.logout}
              width={25}
              height={25}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              DIVATECH
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <nav className="flex h-full flex-col gap-3 pt-10">
              {sidebarLinks.map(({ imgURL, label, route }) => {
                const isActive = activeItem === label;
                return (
                  <Accordion type="single" collapsible key={label}>
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={cn('sidebar-link text-black-1 px-3 py-2', {
                          'bg-erp-gradient text-white': isActive,
                        })}
                        onClick={() => handleAccordionClick(label)}
                      >
                        <div className="size-6 relative">
                          <Image
                            src={imgURL}
                            fill
                            alt={label}
                            className={cn({
                              'brightness-[3] invert-0': isActive,
                            })}
                          />
                        </div>
                        <p>{label}</p>
                      </AccordionTrigger>
                      <SheetClose>
                        <AccordionContent>
                          {route?.map(r => (
                            <Link key={r.name} href={r.link}>
                              {r.name}
                            </Link>
                          ))}
                        </AccordionContent>{' '}
                      </SheetClose>
                    </AccordionItem>
                  </Accordion>
                );
              })}
              <Footer type="mobile" />
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};
