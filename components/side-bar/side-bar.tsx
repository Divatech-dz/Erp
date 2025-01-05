'use client';

import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

import { Accordion } from '../ui/accordion';
import { AccordionSideBar, Footer } from '.';
import { cn } from '@/lib/utils';
import { icons } from '@/constants/icons';
import { usePathname } from 'next/navigation';

export const SideBar = () => {
  const pathname = usePathname();
  const role = 'manager';
  

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4 overflow-y-scroll no-scrollbar">
        <Link href="/" className="cursor-pointer items-center flex gap-2">
          <Image src={icons.logo} alt="logo" height={25} width={25} />
          <h1 className="sidebar-logo">DIVATECH</h1>
        </Link>

        <Accordion type="single" collapsible className="mt-4 flex flex-col gap-2 w-full">
          {sidebarLinks.map(({ imgURL, label, route, id }) => {
            const isActive = route.some((route) =>
              pathname === route.link || pathname.startsWith(`${route.link}/`)
            );
          
            if (role === 'manager') {
              return (
                <Link
                  href={route[0].link}
                  key={label}
                 
                  className={cn('sidebar-link', { 'bg-erp-gradient': isActive })}
                >
                  <div className="relative size-6">
                    <Image
                      src={imgURL}
                      alt={label}
                      fill
                      className={cn({ 'brightness-[3] invert-0': isActive })}
                    />
                  </div>
                  <p className={cn('sidebar-label', { '!text-white': isActive })}>
                    {label}
                  </p>
                </Link>
              );
            }

            return (
              <AccordionSideBar
                key={id}
                id={id}
                imgURL={imgURL}
                isActive={isActive}
                route={route}
                label={label}
              />
            );
          })}
        </Accordion>
      </nav>

      <Footer />
    </section>
  );
};
