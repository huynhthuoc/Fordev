import React from 'react';
import './WatchDotsInSideWrapper.scss';

const WatchDotsInSideWrapper = ({ heartRates }) => {
  const dotsHeart = new Array(50).fill('');
  const lastHeartRate = heartRates[heartRates.length - 1] || 0;
  //tính giá trị dot cần style, nhịp tim tối đa là 200
  //tính 100% dot = 50 dot
  //sẽ là giá trị của nhịp tim heart / 2  và chia 100 * với tổng dot là kết quả dot cần style
  const MathDot = Math.floor(dotsHeart.length * (lastHeartRate / 2 / 100));
  //tạo biến giá trị cao nhất của color
  const maxColor = 120;
  return (
    <div className="watch-dots-inside-wrapper">
      {dotsHeart.map((_, index) => {
        const checkDots = index <= MathDot;
        const deg = 1.8 * index; // tạo biến gốc độ của mõi item
        const minColor = Math.floor(
          //tạo biến giảm dần từ maxcolor để lấy giá trị giảm dần
          maxColor - (index + 1) * (maxColor / dotsHeart.length),
        );
        return (
          <div key={index} style={{ transform: `rotate(${deg}deg)` }}>
            <span
              style={
                checkDots
                  ? {
                      animationDelay: `${index / MathDot}s`,
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
