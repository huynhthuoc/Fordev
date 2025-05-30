import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Colors,
  Filler,
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
    Colors,
    Filler,
  );

  const data = {
    labels: heartRates.map((_, index) => index + 1),
    datasets: [
      {
        data: heartRates,
        fill: 'start',
        borderColor: 'rgba(242, 91, 116, 0.78)',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: (context) => {
          console.log({ context });
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );
          gradient.addColorStop(0, 'rgba(255, 76, 117, 0.4)');
          gradient.addColorStop(1, 'rgba(255, 76, 117, 0)');

          return gradient;
        },
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
