import React from 'react';
import './Home.scss';
import DigitalClock from './DigitalClock';
import Contents from './ContentPage';
const Home = () => {
  return (
    <>
      <div className="homePage">
        <DigitalClock />
        <Contents />
      </div>
    </>
  );
};

export default Home;
