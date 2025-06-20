import React from 'react';
import './Home.scss';
import DigitalClock from './DigitalClock';
const Home = () => {
  return (
    <>
      <div className="homePage">
        <DigitalClock />
        <div>
          <button>click me </button>
        </div>
      </div>
    </>
  );
};

export default Home;
