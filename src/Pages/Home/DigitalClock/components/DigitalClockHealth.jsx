import React from 'react';
//components
import HealthRate from './HealthRate';
import HealthDisplayDate from './HealthDisplayDate';
import HealthWeather from './HealthWeather';
//styles
import '../styles/DigitalClockHealth.scss';
const DigitalClockHealth = () => {
  return (
    <div className="digitalClock__health">
      <HealthRate />
      <HealthDisplayDate />
      <HealthWeather />
    </div>
  );
};

export default React.memo(DigitalClockHealth);
