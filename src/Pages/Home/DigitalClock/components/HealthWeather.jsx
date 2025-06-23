import React from 'react';
import '../styles/HealthWeather.scss';
import cloudyx from '../../../../assets/cloudys.gif';
const HealthWeather = () => {
  return (
    <div className="health__weather">
      <div className="weather__heading">
        <p>18°C</p>
        <h3>Hồ Chí Minh City</h3>
        <p>32°C</p>
      </div>
      <div className="weather__temperature">
        <img width={50} height={50} src={cloudyx} alt="cloudy" /> <p>24°C</p>
      </div>
      <div className="weather__humidity">
        <p>Humidity</p>
        <p>67%</p>
      </div>
    </div>
  );
};

export default HealthWeather;
