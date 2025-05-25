import React, { useRef, useEffect } from 'react';
import './HeartChart.scss';

const HeartChart = ({ heartRates }) => {
  const canvasRef = useRef(null);
  const lastPst = useRef(0);
  console.log(heartRates);
  const data = [
    9, 55, 68, 67, 66, 65, 64, 63, 62, 10, 60, 59, 58, 57, 56, 55, 54, 53, 52,
    51, 50, 49, 48, 22, 46, 45, 44, 33, 42, 41, 22, 11, 9, 55, 68, 67, 66, 65,
    64, 63, 62, 10, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 22, 46,
    45, 44, 33, 42, 41, 22, 11, 9, 55, 68, 67, 66, 65, 64, 63, 62, 10, 60, 59,
    58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 22, 46, 45, 44, 33, 42, 41, 22,
    11, 9, 55, 68, 67, 66, 65, 64, 63, 62, 10, 60, 59, 58, 57, 56, 55, 54, 53,
    52, 51, 50, 49, 48, 22, 46, 45, 44, 33, 42, 41, 22, 11, 9, 55, 68, 67, 66,
    65, 64, 63, 62, 10, 60, 59, 58, 57,
  ];
  // Dữ liệu mẫu
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    const width = canvasRef.current.width;
    const height = canvasRef.current.height;
    const maxHeartRate = width / (data.length - 1);
    const lastindex = lastPst.current;
    ctx.beginPath();
    // if (heartRates.length === 0) {
    //   ctx.moveTo(0, height / 2);
    // } else {
    //   ctx.moveTo(0, height / 2);
    // }
    //mai chỉnh sữa đoạn này lại !!!!! nếu mảng bất đầu từ giờ 00
    //thì sẽ vẽ từ 0 , 35 nếu không sẽ vẽ tiếp điểm cuối cùng của mảng [tao có ý này tại sao không lấy số thời gian thực làm trục X :))]

    data.forEach((item, index) => {
      ctx.lineTo(maxHeartRate + index, height - item);
    });
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    ctx.stroke();
    // lastPst.current = heartRates.length;
  }, []);

  return (
    <div className="heart-chart">
      <canvas ref={canvasRef} width={250} height={70}></canvas>
    </div>
  );
};

export default React.memo(HeartChart);
