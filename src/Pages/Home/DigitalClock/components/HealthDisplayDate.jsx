import { useEffect, useState } from 'react';
import { getDate } from './getDate';
import '../styles/HealthDisplayDate.scss';

//opstion  date
const DATE_FORMAT_OPTIONS = {
  day: '2-digit',
  month: 'short',
  weekday: 'short',
};
const TIME_FORMAT_OPTIONS = { hour: '2-digit', minute: '2-digit' };
const HealthDisplayDate = () => {
  const [dates, setDates] = useState({
    date: getDate(DATE_FORMAT_OPTIONS).toUpperCase().split(','),
    time: getDate(TIME_FORMAT_OPTIONS),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDates({
        date: getDate(DATE_FORMAT_OPTIONS).toUpperCase().split(','),
        time: getDate(TIME_FORMAT_OPTIONS),
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div className="health__displayDate">
      <div className="displayDate__fullDate">
        <p>{dates.date[1]}</p>
        <p>{dates.date[0]}</p>
      </div>
      <div className="displayDate__time">
        <h2>{dates.time}</h2>
      </div>
      <div className="displayDate__circle"></div>
    </div>
  );
};

export default HealthDisplayDate;
