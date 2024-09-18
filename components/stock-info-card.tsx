import { infoCard } from '@/constants';
import { cn } from '@/lib/utils';
import React from 'react';

const StockInfoCard = ({ secondCard = false ,title}:{secondCard?:boolean,title:string}) => {
  return (
    <div className="relative z-10">
      <div className="flex flex-col">
        <div
          className={cn('stock-card',secondCard ? 'bg-erp-green-gradient' : 'bg-erp-gradient',)}
        >
           
            <p className="flex items-center text-lg lg:text-xl font-bold text-white tracking-wide px-4 py-2 text-opacity-80">
              {title}
            </p>
        
          <div
            className={cn(
              'stock-card_content',
              secondCard ? 'bg-erp-green-gradient' : 'bg-erp-gradient',
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

export default StockInfoCard;
