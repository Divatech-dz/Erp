"use client"
import Image from 'next/image';
import StockInfoCard from './stock-info-card';
import SwitchInfo from './switch-info';
import { useState } from 'react';
import { QuantityLabels } from '@/constants';

const RightSideBar = () => {
  const [checked, setChecked] = useState(false)
    const switchState=()=>setChecked(!checked)
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">A</span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">Ahlem Merabtene</h1>
            <div className="profile-role">
              <span className="text-success-600 font-semibold text-[12px] mr-1">
                Role:
              </span>
              <span>Commercial</span>

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
        <div className="relative flex flex-1 flex-col items-center justify-center gap-5 mt-3">
          <StockInfoCard title={QuantityLabels.Sold}/>
          <StockInfoCard secondCard={true} title={checked?QuantityLabels.Available:QuantityLabels.ForSale} />
          <SwitchInfo checked={checked} switchState={switchState}/>
        </div>
      </section>
    </aside>
  );
};

export default RightSideBar;
