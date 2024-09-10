
import HeaderBox from '@/components/header-box';
import React from 'react';

async function Home() {

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox type={'greeting'}
            title="Welcome"
            user={'ahlem'}
            subtext={'Access and manage your account efficiently'} />

        </header>


      </div>


    </section>
  );
}

export default Home;