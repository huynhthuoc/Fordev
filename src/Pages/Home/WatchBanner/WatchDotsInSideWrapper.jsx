import React from 'react';
import './WatchDotsInSideWrapper.scss';

const WatchDotsInSideWrapper = ({ heartRates }) => {
  const dotsHeart = new Array(50).fill('');
  const lastHeartRate = heartRates[heartRates.length - 1] || 0;
  const MathDot = Math.floor(dotsHeart.length * (lastHeartRate / 2 / 100));
  const maxColor = 120;
  return (
    <div className="watch-dots-inside-wrapper">
      {dotsHeart.map((_, index) => {
        const checkDots = index <= MathDot;
        //giá trị góc của mỗi dot
        const deg = 1.8 * index;
        //giá trị màu giảm dần từ 120 đến 0
        const minColor = Math.floor(
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
              className={checkDots ? 'dot-active' : 'dot-not-active'}
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(WatchDotsInSideWrapper);
