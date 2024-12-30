
import { icons } from '@/constants/icons';
import { SalesProps } from '@/types';
import Image from 'next/image';

import React from 'react';

export const SalesCard = ({
  name,
  email,
  salesAmount,
}: Readonly<SalesProps>) => {
  
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className="h-12 w-12 rounded-full bg-gray-100 p-1">
          <Image src={icons.client} alt="avatar" width={200} height={200} />
        </div>
        <div className="text-sm">
          <p>{name}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400">
            {email}
          </div>
        </div>
      </section>
      <p>{salesAmount}</p>
    </div>
  );
};

export default SalesCard;
