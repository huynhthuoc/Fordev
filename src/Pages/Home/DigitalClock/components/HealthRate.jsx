import React from 'react';
import useDataHeart from '../useDataHeart';

//components
import HealthRateTimer from './HealthRateTimer';
import HealthRateChartLine from './HealthRateChartLine';
//styles
import '../styles/HealthRate.scss';

const HealthRate = () => {
  const dataHeart = useDataHeart();
  const lastHealthRate = dataHeart[dataHeart.length - 1] || 0;
  return (
    <div className="health__heartRate">
      <div className="heartRate__heart">
        <div className="heart__icon">
          <i className="fi fi-ss-heart"></i>
        </div>
        <div className="heart__number">{lastHealthRate}</div>
      </div>
      <HealthRateChartLine />
      <HealthRateTimer />
    </div>
  );
};

export default HealthRate;
