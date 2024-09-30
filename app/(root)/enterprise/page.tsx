'use client';
import Tabs from '@/components/tabs';
import { TabsKey, TabsName } from '@/constants';
import { getSubLevelKeys } from '@/lib/utils';
import React from 'react';

function Page() {
  const tabs = getSubLevelKeys(TabsName, TabsKey.Enterprise);

  return (
    <section
      className="no-scrollbar flex w-full flex-col 
      max-xl:max-h-screen max-xl:overflow-y-auto"
    >
      <div
        className="no-scrollbar flex w-full flex-1 flex-col gap-8 px-4 sm:px-6 py-6 sm:py-8 lg:py-10 
        xl:max-h-screen xl:overflow-y-auto"
      >
        <div className="no-scrollbar w-full flex   justify-center items-center gap-3 overflow-x-auto max-w-full sm:gap-1">
          {tabs?.map((value, index) => (
            <Tabs
              tabName={value}
              itemName={TabsName[TabsKey.Enterprise][value]}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
