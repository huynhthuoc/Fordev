import React, { useEffect, useState } from 'react';
import HealthCardWrapper from './HealthCardWrapper';
import WatchDotsInSideWrapper from './WatchDotsInSideWrapper';
import WatchDotsWrapper from './WatchDotsWrapper';
import WatchDirectionWrapper from './WatchDirectionWrapper';
import './WatchBanner.scss';
const WatchBanner = () => {
  const [heartRates, setHeartRates] = useState([111]);
  ///fake data heart rate
  useEffect(() => {
    const idSetinter = setInterval(() => {
      const newHeart = Math.floor(Math.random() * 200);
      if (newHeart > 0 && newHeart < 200) {
        setHeartRates((prev) => {
          if (prev.length >= 500) {
            return [];
          }
          return [...prev, newHeart];
        });
      }
    }, 2000);
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
        <WatchDirectionWrapper />
        <WatchDotsWrapper />
        <WatchDotsInSideWrapper heartRates={heartRates} />
        <HealthCardWrapper heartRates={heartRates} />
      </div>
    </div>
  );
};

export default WatchBanner;
