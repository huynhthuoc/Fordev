import React, { useEffect, useState } from 'react';
import HealthWeatherCard from './HealthWeatherCard';
import WrapperDotsHeart from './WrapperDotsHeart';
import WrapperDots from './WrapperDots';
import WrapperDirection from './WrapperDirection';
import './WatchBanner.scss';
const WatchBanner = () => {
  const [heartRates, setHeartRates] = useState([0]);
  ///fake data heart rate
  useEffect(() => {
    const idSetinter = setInterval(() => {
      const newHeart = Math.floor(Math.random() * 200);
      if (newHeart > 55 && newHeart < 170) {
        setHeartRates((prev) => {
          if (prev.length >= 600) {
            return [];
          }
          return [...prev, newHeart];
        });
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
        <WrapperDotsHeart heartRates={heartRates} />
        <HealthWeatherCard heartRates={heartRates} />
      </div>
    </div>
  );
};

export default WatchBanner;
