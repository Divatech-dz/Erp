import React from 'react';
import { cardData } from '@/constants';
import DashboardCard, { CardContent } from '@/components/dashboard-card';
import BarChart from '@/components/bar-chart';

function Ceo() {
  return (
    <section>
      <div className="home-content">
        <header className="home-header">
          <div className="header-box">
            <h1 className="header-box-title">
              Bienvenue <span className="text-bankGradient">Mohamed Amine</span>
            </h1>
            <p className="header-box-subtext">Gérer votre entreprise</p>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4 text-base">
          <DashboardCard
            label="DIVATECH"
            amount={`Nombre d'employés: ${cardData[0].amount}`}
            description={cardData[0].description}
            icon={cardData[0].icon}
            color={cardData[0].color}
          />
        </div>
        <div className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>
            <BarChart />
          </CardContent>
        </div>
      </div>
    </section>
  );
}

export default Ceo;
