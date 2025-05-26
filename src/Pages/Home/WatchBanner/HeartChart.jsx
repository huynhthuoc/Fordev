import React, { useRef, useEffect } from 'react';
import './HeartChart.scss';

const HeartChart = ({ heartRates }) => {
  const canvasRef = useRef(null);
  const lastPst = useRef(null);
  const requestAnimation = useRef(null);

  console.log(heartRates);
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const maxValue = 200;
    const maxHeartRate = width / 100 + 5;
    const lastindex = lastPst.current;
    const lastValueHeartY =
      height - (heartRates[heartRates.length - 1] / maxValue) * height;
    const lastValueHeartX = (heartRates.length - 1) * maxHeartRate;
    function draw() {
      if (!heartRates || heartRates.length === 0) {
        ctx.clearRect(0, 0, width, height);
        return;
      }
      if (!lastindex) {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        heartRates.forEach((item, index) => {
          ctx.lineTo(index * maxHeartRate, height - (item / maxValue) * height);
        });
        ctx.stroke();
        lastPst.current = {
          x: lastValueHeartX,
          y: lastValueHeartY,
        };
      } else {
        ctx.beginPath();
        ctx.moveTo(lastindex.x, lastindex.y);
        ctx.lineTo(lastValueHeartX, lastValueHeartY);
        ctx.stroke();
        lastPst.current = {
          x: lastValueHeartX,
          y: lastValueHeartY,
        };
      }
      requestAnimation.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(requestAnimation.current);
    };
  }, [heartRates]);

  return (
    <div className="heart-chart">
      <canvas ref={canvasRef} width={250} height={70}></canvas>
    </div>
  );
};

export default React.memo(HeartChart);
