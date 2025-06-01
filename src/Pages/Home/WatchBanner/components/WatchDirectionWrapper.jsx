import React from 'react';
import '../styles/WatchDirectionWrapper.scss';
function WatchDirectionWrapper() {
  const directionDots = new Array(24).fill('');
  return (
    <div className="watch-direction-wrapper">
      {directionDots.map((item, index) => {
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

export default WatchDirectionWrapper;
