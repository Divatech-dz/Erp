import { MobileNav } from '@/components/mobile-nav-bar';
import { RightSideBar } from '@/components/right-side-bar';
import { SideBar } from '@/components/side-bar';
import Image from 'next/image';
import React from 'react';
import QueryProvider from '../../providers/QueryProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryProvider>
      <main className="flex w-full font-inter no-scrollbar">
        <SideBar />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
            <div>
              <MobileNav />
            </div>
          </div>
          {children}
        </div>
        <RightSideBar />
      </main>
    </QueryProvider>
  );
}
