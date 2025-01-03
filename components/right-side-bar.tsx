'use client';
import Image from 'next/image';
import { useState } from 'react';
import { QuantityLabels } from '@/constants';
import { icons } from '@/constants/icons';
import { StockInfoCard, ToggleInfo } from './right-side-bar-components';
import { useGetUser } from '@/service/userService';
import { Store } from 'lucide-react';
import { useStoreContext } from '@/lib/context/store';


export const RightSideBar = () => {
  const [checked, setChecked] = useState(false);
  const switchState = () => setChecked(!checked);
  const {selectedStoreName}=useStoreContext()
  const { data: user } = useGetUser();

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">A</span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">{user?.first_name!} {user?.last_name}</h1>
            <div className="profile-role">
              <p className="flex items-center gap-2 text-lg font-ibm-plex-serif text-gray-800">
                <Store className="h-5 w-5 text-blue-600" />
                {selectedStoreName??'DivaTech'}
              </p>


              <Image
                src={icons.Check}
                width={20}
                height={20}
                alt="accept"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cards">
        <div className="relative flex flex-col items-center justify-center gap-16 mt-2">
          <StockInfoCard title={QuantityLabels.Sold} />
          <StockInfoCard
            secondCard={true}
            title={checked ? QuantityLabels.Available : QuantityLabels.ForSale}
            color={checked ? 'bg-erp-green-gradient' : 'bg-erp-purple-gradient'}
          />
          <ToggleInfo
            checked={checked}
            switchState={switchState}
            id="switch-card"
          />
        </div>
      </section>
    </aside>
  );
};
