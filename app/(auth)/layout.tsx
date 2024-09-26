import Image from 'next/image';
import divatech from '../../public/icons/erp-01.jpg';

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
          src={divatech}
          alt="Auth image"
          width={800}
          height={800}
          className=" object-contain mx-auto"
        />
      </div>
    </main>
  );
}
