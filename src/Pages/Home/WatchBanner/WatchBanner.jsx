import React, { useEffect, useState } from 'react';
import HealthWeatherCard from './HealthWeatherCard';
import WrapperDotsHeart from './WrapperDotsHeart';
import WrapperDots from './WrapperDots';
import WrapperDirection from './WrapperDirection';
import './WatchBanner.scss';
const WatchBanner = () => {
  const [heartRate, setHeartRate] = useState(100);

  ///fake data heart rate
  useEffect(() => {
    const idSetinter = setInterval(() => {
      const HearthRate = Math.floor(Math.random() * 200);
      if (HearthRate > 90 && HearthRate < 166) {
        setHeartRate(HearthRate);
      }
    }, 1000);
    return () => {
      clearInterval(idSetinter);
    };
  }, []);
  //get X-Y banner watch
  // const [date, setData] = useState(
  // );
  // console.log(date.toLocaleDateString());
  // useEffect(() => {
  //   let setinterID = setInterval(() => {
  //     setData(new Date());
  //   }, 1000);

  //   return () => {
  //     clearInterval(setinterID);
  //   };
  // }, []);

  return (
    <div className="banner-watch">
      <div className="container-watch">
        <WrapperDirection />
        <WrapperDots />
        <WrapperDotsHeart heartRate={heartRate} />
        <HealthWeatherCard heartRate={heartRate} />
      </div>
    </div>
  );
};

export default WatchBanner;
