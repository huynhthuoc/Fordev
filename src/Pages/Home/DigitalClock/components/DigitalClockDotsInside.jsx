import React, { useMemo } from 'react';
import '../styles/DigitalClockDotsInside.scss';
import useDataHeart from '../useDataHeart';

const DigitalClockDotsInside = () => {
  const dataHeart = useDataHeart();
  const dotsHeart = useMemo(() => new Array(50).fill(''), []);
  const lastHeartRate = dataHeart[dataHeart.length - 1] || 0;
  const MathDot = Math.floor(dotsHeart.length * (lastHeartRate / 2 / 100));
  const maxColor = 120;
  return (
    <div className="digitalClock__dotsInside">
      {dotsHeart.map((_, index) => {
        const checkDots = index <= MathDot;

        //giá trị góc của mỗi dot
        const deg = 1.8 * index;

        const minColor = Math.floor(
          //giá trị màu giảm dần từ 120 đến 0
          maxColor - (index + 1) * (maxColor / dotsHeart.length),
        );
        return (
          <div key={index} style={{ transform: `rotate(${deg}deg)` }}>
            <span
              style={
                checkDots
                  ? {
                      animationDelay: `${index / dotsHeart.length / 2}s`,
                      backgroundColor: `hsl(${minColor}, 95.70%, 46.10%)`,
                    }
                  : {
                      animationDelay: '0s',
                      backgroundColor: `hsl(${minColor}, 95.70%, 46.10%)`,
                    }
              }
              className={
                checkDots ? 'dotsInside--active' : 'dotsInside--notActive'
              }
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default DigitalClockDotsInside;
