import { useState, useEffect } from 'react';
import useDataHeart from '../useDataHeart';

//components
//styles
import '../styles/HealthTimer.scss';

const HealthTimer = () => {
  const [times, setTimes] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    timerUpdate: formatTime(),
    timer: formatTime(),
  });
  const isDataHeart = useDataHeart().length !== 0;
  function formatTime() {
    return new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  useEffect(() => {
    const idSetInter = setInterval(() => {
      if (isDataHeart) {
        setTimes((prev) => {
          return {
            ...prev,
            hours: prev.minutes >= 60 ? prev.hours + 1 : prev.hours,
            minutes: prev.seconds >= 59 ? prev.minutes + 1 : prev.minutes,
            seconds: prev.seconds >= 59 ? 0 : prev.seconds + 1,
            timerUpdate: formatTime(),
          };
        });
      } else {
        setTimes({
          hours: 0,
          minutes: 0,
          seconds: 0,
          timerUpdate: formatTime(),
          timer: formatTime(),
        });
      }
    }, 1000);

    //clear up setInterval
    return () => {
      clearInterval(idSetInter);
    };
  }, [isDataHeart]);

  return (
    <div className="heartRate-timer">
      <p>{times.timer}</p>
      <p>
        {times.hours >= 10 ? times.hours : `0${times.hours}`}
        <span>:</span>
        {times.minutes >= 10 ? times.minutes : `0${times.minutes}`}
        <span>:</span>
        {times.seconds >= 10 ? times.seconds : `0${times.seconds}`}
      </p>
      <p>{times.timerUpdate}</p>
    </div>
  );
};

export default HealthTimer;
