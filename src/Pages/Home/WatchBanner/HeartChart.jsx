import React, { useRef, useEffect } from 'react';
import './HeartChart.scss';

const HeartChart = ({ heartRates }) => {
  return (
    <div className="heart-chart">
      <div className="chart-dot">
        <span> </span>
      </div>
    </div>
  );
};

export default React.memo(HeartChart);
