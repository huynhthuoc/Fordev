import { useState, useEffect } from 'react';
import { contextData } from './context';
const ProviderDataHeart = ({ children }) => {
  const [dataHeart, setdataHeart] = useState([0]);
  ///fake data heart rate
  useEffect(() => {
    const idSetinter = setInterval(() => {
      const newHeart = Math.floor(Math.random() * 200);

      setdataHeart((prev) => {
        if (prev.length >= 80) {
          return [];
        }
        return [...prev, newHeart];
      });
    }, 2000);
    return () => {
      clearInterval(idSetinter);
    };
  }, []);

  return (
    <contextData.Provider value={dataHeart}>{children}</contextData.Provider>
  );
};

export default ProviderDataHeart;
