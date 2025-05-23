import React from 'react';
import './HealthWeatherCard.scss';
//đang chia nhỏ component chưa gọp !

const HealthWeatherCard = ({ heartRate }) => {
  return (
    <div className="health">
      <HeartRate heartRate={heartRate} />
      <div className="health-chart"></div>
      <div className="weather"> </div>
    </div>
  );
};

export default HealthWeatherCard;

function HeartRate({ heartRate }) {
  return (
    <div className="heart-rate">
      <div className="heart-icon">
        <i className="fi fi-ss-heart"></i>
      </div>
      <div className="heart-number">{heartRate}</div>
    </div>
  );
}
