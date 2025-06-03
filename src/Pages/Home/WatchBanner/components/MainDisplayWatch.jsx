import { useEffect, useState } from 'react';
import { getDate } from './getDate';
import '../styles/MainDisplayWatch.scss';

//opstion  date
const DATE_FORMAT_OPTIONS = {
  month: 'short',
  day: '2-digit',
  weekday: 'short',
};
const TIME_FORMAT_OPTIONS = { hour: '2-digit', minute: '2-digit' };
const MainDisplayWatch = () => {
  const [dates, setDates] = useState({
    date: getDate(DATE_FORMAT_OPTIONS).toUpperCase(),
    time: getDate(TIME_FORMAT_OPTIONS),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDates({
        date: getDate(DATE_FORMAT_OPTIONS).toUpperCase(),
        time: getDate(TIME_FORMAT_OPTIONS),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="health-mainDisplayWatch">
      <div className="mainDisplayWatch-date">{dates.date}</div>
      <div className="mainDisplayWatch-time">
        <h2>{dates.time}</h2>
      </div>
      <div className="mainDisplayWatch-circle"></div>
    </div>
  );
};

export default MainDisplayWatch;
