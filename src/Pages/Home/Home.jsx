import React from 'react';
import './Home.scss';
import WatchBanner from './WatchBanner';

const Home = () => {
  return (
    <>
      <div className="homePage">
        <WatchBanner />
        <div>
          <button>click me </button>
        </div>
      </div>
    </>
  );
};

export default Home;
