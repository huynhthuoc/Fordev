import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import './HealthRate.scss';

const HealthRate = ({ heartRates }) => {
  const lastHealthRate = heartRates[heartRates.length - 1] || 0;
  return (
    <div className="health-heartRate">
      <div className="heartRate-heart">
        <div className="heartRate-icon">
          <i className="fi fi-ss-heart"></i>
        </div>
        <div className="heartRate-number">{lastHealthRate}</div>
      </div>
      <HealthChart heartRates={heartRates} />
      <div className="heartRate-time">
        <p>00:00</p>
        <p>12:00</p>
        <p>00:00</p>
      </div>
    </div>
  );
};

export default HealthRate;

const HealthChart = React.memo(({ heartRates }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
  );
  const data = {
    labels: heartRates.map((_, index) => index + 1),
    datasets: [
      {
        data: heartRates,
        borderColor: ' #f25b75',
        tension: 0.3,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <Line
      data={data}
      options={options}
      style={{ width: '25rem', height: '7rem' }}
    />
  );
});
