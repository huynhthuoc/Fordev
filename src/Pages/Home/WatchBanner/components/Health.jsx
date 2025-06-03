import React from 'react';

//components
import HealthRate from './HealthRate';
import MainDisplayWatch from './MainDisplayWatch';
//styles
import '../styles/Health.scss';
const HealthWeatherCard = () => {
  return (
    <div className="watch-health">
      <HealthRate />
      <MainDisplayWatch />
    </div>
  );
};

export default React.memo(HealthWeatherCard);
