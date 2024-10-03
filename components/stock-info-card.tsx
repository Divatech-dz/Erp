import { infoCard } from '@/constants';
import { cn } from '@/lib/utils';
import React from 'react';

export const StockInfoCard = ({
  secondCard = false,
  title,
  color,
}: Readonly<{
  secondCard?: boolean;
  title: string;
  color?: string;
}>) => {
  return (
    <div className="relative z-10">
      <div className="flex flex-col">
        <div
          className={cn('stock-card', secondCard ? color : 'bg-erp-gradient')}
        >
          <p className="flex items-center text-lg lg:text-xl font-bold text-white tracking-wide px-4 py-2 text-opacity-80">
            {title}
          </p>

          <div
            className={cn(
              'stock-card_content',
              secondCard ? color : 'bg-erp-gradient',
            )}
          >
            {infoCard?.map(({ name, total }, index) => {
              return (
                <div key={index}>
                  <h1 className="text-16 font-semibold text-black-1">{name}</h1>
                  <p className="font-ibm-plex-serif font-black text-white">
                    {total}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
