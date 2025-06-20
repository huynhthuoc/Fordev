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
import useDataHeart from '../useDataHeart';
const HealthRateChartLine = () => {
  const dataHeart = useDataHeart();

  const dots = new Array(80).fill(0);
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
    labels: dataHeart.map((_, index) => index + 1),
    datasets: [
      {
        data: dataHeart,
        fill: 'start',
        borderColor: 'rgba(242, 91, 116, 0.78)',
        tension: 0.1,
        pointRadius: 0,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom,
          );
          gradient.addColorStop(0, 'rgba(255, 76, 118, 0.58)');
          gradient.addColorStop(1, 'rgba(255, 76, 117, 0)');

          return gradient;
        },
      },
      {
        label: 'Dots phía dưới',
        data: dots,
        borderWidth: 0,
        pointRadius: 2,
        pointBackgroundColor: 'rgb(131, 108, 108)',
        showLine: false,
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
};
export default HealthRateChartLine;
