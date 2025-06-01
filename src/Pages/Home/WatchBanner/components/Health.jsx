import React from 'react';

//components
import HealthRate from './HealthRate';
//styles
import '../styles/Health.scss';
const HealthWeatherCard = () => {
  return (
    <div className="watch-health">
      <HealthRate />
    </div>
  );
};

export default React.memo(HealthWeatherCard);
