import { useContext } from 'react';
import { contextDataHeart } from './context';
const useDataHeart = () => {
  const dataHeart = useContext(contextDataHeart);

  return dataHeart;
};

export default useDataHeart;
