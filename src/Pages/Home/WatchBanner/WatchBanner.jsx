import React from 'react';
import './WatchBanner.scss';
const WatchBanner = () => {
  //get X-Y banner watch
  // const [date, setData] = useState(
  // );
  // console.log(date.toLocaleDateString());
  // useEffect(() => {
  //   let setinterID = setInterval(() => {
  //     setData(new Date());
  //   }, 1000);

  //   return () => {
  //     clearInterval(setinterID);
  //   };
  // }, []);

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
                  <i className="fi fi-tr-triangle"></i>
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

  function WrapperDotsHeath() {
    const dotsHeath = new Array(50).fill('');
    const heath = 220;
    //tính giá trị dot cần style, nhịp tim tối đa là 200
    //tính 100% dot = 50 dot
    //sẽ là giá trị của nhịp tim heath / 2  và chia 100 * với tổng dot là kết quả dot cần style
    const MathDot = Math.floor(dotsHeath.length * (heath / 2 / 100));
    //tạo biến giá trị cao nhất của color
    const maxColor = 120;

    return (
      <div className="wrapper-dots-heath">
        {dotsHeath.map((item, index) => {
          const checkDots = index < MathDot;
          // tạo biến gốc độ của mõi item
          //
          const deg = 1.8 * index;
          //tạo biến giảm dần từ maxcolor để lấy giá trị giảm dần
          const minColor = Math.floor(
            maxColor - (index + 1) * (maxColor / dotsHeath.length),
          );
          return (
            <div
              key={index}
              className="dots-heath"
              style={{ transform: `rotate(${deg}deg)` }}
            >
              <span
                style={
                  checkDots
                    ? {
                        animationDelay: `${(index / MathDot) * 2}s`,
                        backgroundColor: `hsl(${minColor}, 95.70%, 46.10%)`,
                      }
                    : {}
                }
                className={checkDots ? 'dots-heath-style' : ''}
              ></span>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="banner-watch">
      <div className="container-watch">
        <WrapperDirection />
        <WrapperDots />
        <WrapperDotsHeath />
      </div>
    </div>
  );
};

export default WatchBanner;
