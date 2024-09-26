import BarChart from '@/components/bar-chart';
import DashboardCard, { CardContent } from '@/components/dashboard-card';
import HeaderBox from '@/components/header-box';
import RightSideBar from '@/components/right-side-bar';
import SalesCard from '@/components/sales-card';
import { cardData, userSalesData } from '@/constants';
import React from 'react';

async function Home() {

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type={'greeting'}
            title="Welcome"
            user={'ahlem'}
            subtext={'Access and manage your account efficiently'}
          />

        </header>
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((data, index) => (
          <DashboardCard 
            key={index}
            amount={data.amount}
            description={data.description}
            icon={data.icon}
            label={data.label}
            color={data.color}
          />
        ))}
        </section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart/>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month.
            </p>
          </section>
          {userSalesData.map((data, index) => (
            <SalesCard
              key={index}
              email={data.email}
              name={data.name}
              salesAmount={data.salesAmount}
            />
          ))}
        </CardContent>
      </section>

      </div>
      <RightSideBar />
    </section>
  );
}

export default Home;
