'use client';

import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Accordion } from './ui/accordion';
import { AccordionSideBar } from './accordion-side-bar';
import { Footer } from './footer';


export const SideBar = () => {
  const [activeItem, setActiveItem] = useState<string | null>('');
  const handleAccordionClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4   overflow-y-scroll no-scrollbar ">
        <Link href={'/'} className="cursor-pointer items-center flex gap-2">
          <Image src={'/icons/logo.svg'} alt={'logo'} height={25} width={25} />
          <h1 className="sidebar-logo">DIVATECH</h1>
        </Link>
        <Accordion
          type="single"
          collapsible
          className="mt-4 flex flex-col justify-between items-center"
        >
          {sidebarLinks.map(({ imgURL, label, route, id }) => {
            const isActive = activeItem === label;
            return (
              <AccordionSideBar
                id={id}
                imgURL={imgURL}
                isActive={isActive}
                route={route}
                label={label}
                key={id}
                handleAccordionClick={handleAccordionClick}
              />
            );
          })}
        </Accordion>
      </nav>
      <Footer />
    </section>
  );
};
