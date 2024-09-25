'use client';

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Footer from './footer';

const SideBar = () => {
    const pathName = usePathname();
   
    return (
        <section className='sidebar'>
            <nav className="flex flex-col gap-4 overflow-y-scroll no-scrollbar">
                <Link href={'/'} className="cursor-pointer mb-12 items-center gap-2 flex">
                    <Image
                        src={'/icons/logo.svg'}
                        alt={'logo'}
                        height={34}
                        width={34}
                        className="size-[24px] lg:size-14"
                    />
                    <h1 className="sidebar-logo">DivaTech</h1>
                </Link>
                {sidebarLinks.map(({ imgURL, label, route }) => {
                    const isActive = pathName === route || pathName.startsWith(`${route}/`);
                    return (
                        <Link
                            href={route}
                            key={label}
                            className={cn('sidebar-link', { 'bg-erp-gradient': isActive })}
                        >
                            <div className="size-6 relative">
                                <Image
                                    src={imgURL}
                                    fill
                                    alt={label}
                                    className={cn({ 'brightness-[3] invert-0': isActive })}
                                />

                            </div>
                            <p className={cn('sidebar-label', { '!text-white': isActive })}>
                                {label}
                            </p>
                        </Link>
                    );
                })}
            </nav>
            <Footer />

        </section>
    )
}

export default SideBar
