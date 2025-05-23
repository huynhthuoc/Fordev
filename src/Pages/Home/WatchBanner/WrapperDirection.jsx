import React from 'react';
import './WrapperDirection.scss';
function WrapperDirection() {
  const directionDots = new Array(24).fill('');
  return (
    <div className="wrapper-direction">
      {directionDots.map((item, index) => {
        // tạo biến gốc độ của mõi item
        const deg = 15 * (index + 1);

        return (
          <div
            key={index}
            style={{
              transform: `rotate(${deg}deg)`,
            }}
            className="watch-direction"
          >
            {index % 2 === 0 ? (
              index !== 0 ? (
                <span className="direction-number">{index}</span>
              ) : (
                <i className="fi fi-rs-triangle"></i>
              )
            ) : (
              <span className="direction-dot"></span>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default WrapperDirection;
