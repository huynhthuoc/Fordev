import React from 'react';
import './WrapperDotsHeart.scss';

const WrapperDotsHeart = ({ heartRate }) => {
  const dotsHeart = new Array(50).fill('');
  //tính giá trị dot cần style, nhịp tim tối đa là 200
  //tính 100% dot = 50 dot
  //sẽ là giá trị của nhịp tim heart / 2  và chia 100 * với tổng dot là kết quả dot cần style
  const MathDot = Math.floor(dotsHeart.length * (heartRate / 2 / 100));
  //tạo biến giá trị cao nhất của color
  const maxColor = 120;

  return (
    <div className="wrapper-dots-heart">
      {dotsHeart.map((item, index) => {
        const checkDots = index < MathDot;
        // tạo biến gốc độ của mõi item
        //
        const deg = 1.8 * index;
        //tạo biến giảm dần từ maxcolor để lấy giá trị giảm dần
        const minColor = Math.floor(
          maxColor - (index + 1) * (maxColor / dotsHeart.length),
        );
        return (
          <div
            key={index}
            className="dots-heart"
            style={{ transform: `rotate(${deg}deg)` }}
          >
            <span
              style={
                checkDots
                  ? {
                      animationDelay: `${index / MathDot}s`,
                      backgroundColor: `hsl(${minColor}, 95.70%, 46.10%)`,
                    }
                  : {}
              }
              className={checkDots ? 'dots-heart-style' : ''}
            ></span>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(WrapperDotsHeart);
