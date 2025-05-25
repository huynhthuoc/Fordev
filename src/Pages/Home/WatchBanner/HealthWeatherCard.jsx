import React, { useRef, useEffect } from 'react';
import './HealthWeatherCard.scss';
import HeartRate from './HeartRate';
const HealthWeatherCard = ({ heartRates }) => {
  return (
    <div className="health">
      <HeartRate heartRates={heartRates} />
    </div>
  );
};

export default React.memo(HealthWeatherCard);
