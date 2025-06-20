import React from 'react';
//components
import HealthRate from './HealthRate';
import HealtDisplayDate from './HealtDisplayDate';
//styles
import '../styles/DigitalClockHealth.scss';
const DigitalClockHealth = () => {
  return (
    <div className="digitalClock__health">
      <HealthRate />
      <HealtDisplayDate />
    </div>
  );
};

export default React.memo(DigitalClockHealth);
