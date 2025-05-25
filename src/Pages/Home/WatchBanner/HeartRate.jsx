import React from 'react';
import HeartChart from './HeartChart';
import './HeartRate.scss';
const HeartRate = ({ heartRates }) => {
  const lastHeartRate = heartRates[heartRates.length - 1] || 0;
  return (
    <div className="heart-rate">
      <div className="heart-number">
        <div className="heart-icon">
          <i className="fi fi-ss-heart"></i>
        </div>
        <div className="heart-number">{lastHeartRate}</div>
      </div>
      <HeartChart heartRates={heartRates} />
      <div className="heart-time">
        <p>00:00</p>
        <p>12:00</p>
        <p>00:00</p>
      </div>
    </div>
  );
};

export default HeartRate;
