import React from 'react';
import '../styles/DigitalClockDirection.scss';
function DigitalClockDirection() {
  const directionDots = new Array(24).fill('');
  return (
    <div className="digitalClock__direction">
      {directionDots.map((_, index) => {
        // tạo biến gốc độ của mõi item
        const deg = 15 * (index + 1);

        return (
          <div
            key={index}
            style={{
              transform: `rotate(${deg}deg)`,
            }}
          >
            {index % 2 === 0 ? (
              index !== 0 ? (
                <span className="direction__number">{index}</span>
              ) : (
                <i className="fi fi-rs-triangle"></i>
              )
            ) : (
              <span className="direction__dot"></span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default DigitalClockDirection;
