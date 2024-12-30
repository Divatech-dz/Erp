
"use client"
import { cardData, userSalesData } from '@/constants'
import React from 'react'
import { DashboardCard, CardContent } from './dashboard-card'
import SalesCard from './sales-card'
import { BarChart } from './bar-chart'
import { useGetUser } from '@/service/userService'




export const DashboardPage = () => {
  const { data: user, isLoading, isError } = useGetUser();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading user data</p>;

  return (
    <div className="home-content">
      <header className="home-header">
        <div className="header-box">
          <h1 className="header-box-title">
            Bienvenue <span className="text-bankGradient capitalize">{user?.first_name!} {user?.last_name}</span>
          </h1>
          <p className="header-box-subtext">Gérer votre entreprise</p>
        </div>
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
          <BarChart />
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
    </div>)
}

