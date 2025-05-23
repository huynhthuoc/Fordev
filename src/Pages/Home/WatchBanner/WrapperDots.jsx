import React from 'react';
import './WrapperDots.scss';
function WrapperDots() {
  const dots = new Array(100).fill('');
  return (
    <div className="wrapper-dots">
      {dots.map((item, index) => {
        // tạo biến gốc độ của mõi item
        const deg = 6 * (index + 1);

        return (
          <div
            className="watch-dot"
            key={index}
            style={{
              transform: `rotate(${deg}deg)`,
            }}
          >
            <span
              style={
                index % 5 === 0
                  ? {
                      height: '0.4rem',
                      width: '0.5rem',
                    }
                  : {}
              }
            ></span>
          </div>
        );
      })}
    </div>
  );
}

export default WrapperDots;
