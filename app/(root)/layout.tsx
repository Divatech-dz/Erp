
import FloatingIcon from '@/components/dashboard-components/floating-icon';
import { RightSideBar } from '@/components/right-side-bar';
import { MobileNav, SideBar } from '@/components/side-bar';
import Image from 'next/image';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex w-full font-inter no-scrollbar">
      <SideBar />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" className='w-auto h-auto' />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
      <RightSideBar />
      <FloatingIcon />
    </main>
  );
}
