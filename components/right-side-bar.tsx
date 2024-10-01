'use client';
import Image from 'next/image';
import StockInfoCard from './stock-info-card';
import SwitchInfo from './switch-info';
import { useState } from 'react';
import { QuantityLabels } from '@/constants';

export const RightSideBar = () => {
  const [checked, setChecked] = useState(false);
  const switchState = () => setChecked(!checked);
  const fName = 'Mohamed Amine';
  return (
    <aside className="right-sidebar">
      <div className="profile-banner ">
        <div className="profile-details">
          <h1 className="profile-name">{fName}</h1>
          <div className="profile-role">
            <p className=" font-semibold">Role: Commercial</p>

            <Image
              src="/icons/check.svg"
              width={20}
              height={20}
              alt="accept"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center gap-16 mt-3">
        <StockInfoCard title={QuantityLabels.Sold} />
        <StockInfoCard
          secondCard={true}
          title={checked ? QuantityLabels.Available : QuantityLabels.ForSale}
          color={checked ? 'bg-erp-green-gradient' : 'bg-erp-purple-gradient'}
        />
        <SwitchInfo
          checked={checked}
          switchState={switchState}
          id="switch-card"
        />
      </div>
    </aside>
  );
};
