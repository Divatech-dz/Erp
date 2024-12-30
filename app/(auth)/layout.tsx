import { images } from '@/constants/icons';
import Image from 'next/image';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
       {children}
      <div className="auth-asset">
        <Image
          src={images.DivaTech}
          alt="Auth image"
          width={1800}
          height={1800}
          className="w-full h-full object-cover mx-auto"
        />
      </div>
    </main>
  );
}
