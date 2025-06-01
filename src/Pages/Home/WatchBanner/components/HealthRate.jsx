import React from 'react';
import useDataHeart from '../useDataHeart';

//components
import HealthTimer from './HealthTimer';
import HealthChart from './HealthChart';
//styles
import '../styles/HealthRate.scss';

const HealthRate = () => {
  const dataHeart = useDataHeart();
  const lastHealthRate = dataHeart[dataHeart.length - 1] || 0;
  return (
    <div className="health-heartRate">
      <div className="heartRate-heart">
        <div className="heartRate-icon">
          <i className="fi fi-ss-heart"></i>
        </div>
        <div className="heartRate-number">{lastHealthRate}</div>
      </div>
      <HealthChart />
      <HealthTimer />
    </div>
  );
};

export default HealthRate;
