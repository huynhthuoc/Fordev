import React from 'react';
import ProviderDataHeart from './ProviderDataHeart';
//components
import DigitalClockHealth from './components/DigitalClockHealth';
import DigitalClockDirection from './components/DigitalClockDirection';
import DigitalClockDots from './components/DigitalClockDots';
import DigitalClockDotsInside from './components/DigitalClockDotsInside';
import './DigitalClock.scss';
const DigitalClock = () => {
  return (
    <ProviderDataHeart>
      <div className="digitalClock">
        <DigitalClockDirection />
        <DigitalClockDots />
        <DigitalClockDotsInside />
        <DigitalClockHealth />
      </div>
    </ProviderDataHeart>
  );
};

export default DigitalClock;
