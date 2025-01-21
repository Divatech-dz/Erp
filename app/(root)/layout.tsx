
import FloatingIcon from '@/components/dashboard-components/floating-icon';
import { RightSideBar } from '@/components/right-side-bar';
import { MobileNav,  } from '@/components/side-bar';
import { icons } from '@/constants/icons';
import Image from 'next/image';
import SideBar from "@/components/side-bar/side-bar";

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
          <Image src={icons.logo} width={30} height={30} alt="logo"  />
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
