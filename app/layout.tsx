
import type { Metadata } from 'next';
import { Inter, IBM_Plex_Serif } from 'next/font/google';
import './globals.css';
import Providers from '../components/providers';
import { StoreProvider } from '@/lib/context/store';




const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const IMBPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-imb-pixel',
});

export const metadata: Metadata = {
  title: 'DIVATECH',
  description: 'Ultimate Gaming Experience',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
 
       <html lang="en">
      <body className={`${inter.variable}${IMBPlexSerif.variable}`}>
      <Providers> <StoreProvider>{children}</StoreProvider></Providers>
      </body>
    </html>
    
   
  );
}
