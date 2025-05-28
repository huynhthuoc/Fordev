import React from 'react';
import './HealthCardWrapper.scss';
import HealthRate from './HealthRate';
const HealthWeatherCard = ({ heartRates }) => {
  return (
    <div className="watch-health-wrapper">
      <HealthRate heartRates={heartRates} />
    </div>
  );
};

export default React.memo(HealthWeatherCard);
