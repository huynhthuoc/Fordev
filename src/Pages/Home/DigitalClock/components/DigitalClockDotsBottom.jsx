import { useMemo } from 'react';
import '../styles/DigitalClockDotsBottom.scss';
const DigitalClockDotsWeather = () => {
  const dotsHeart = useMemo(() => new Array(50).fill(''), []);
  const fakeWeather = 0.67;
  return (
    <div className="digitalClock__dotsWeather">
      {dotsHeart.map((_, index) => {
        const checkDots = (dotsHeart.length - 1) * fakeWeather >= index;
        //giá trị góc của mỗi dot
        const deg = 2.45 * index;

        return (
          <div key={index} style={{ transform: `rotate(${deg}deg)` }}>
            <span
              className={checkDots ? 'dotsWeather--active' : ''}
              style={{ animationDelay: `${index * 0.1}s` }}
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default DigitalClockDotsWeather;
