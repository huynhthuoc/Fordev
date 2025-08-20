import ProviderDataHeart from './ProviderDataHeart';
//components
import DigitalClockHealth from './components/DigitalClockHealth';
import DigitalClockDirection from './components/DigitalClockDirection';
import DigitalClockDots from './components/DigitalClockDots';
import DigitalClockDotsInside from './components/DigitalClockDotsInside';
import DigitalClockDotsBottom from './components/DigitalClockDotsBottom';

import './DigitalClock.scss';
const DigitalClock = () => {
  return (
    <ProviderDataHeart>
      <div className="homePage__digitalClock">
        <DigitalClockDirection />
        <DigitalClockDots />
        <DigitalClockDotsInside />
        <DigitalClockHealth />
        <DigitalClockDotsBottom />
      </div>
    </ProviderDataHeart>
  );
};

export default DigitalClock;
