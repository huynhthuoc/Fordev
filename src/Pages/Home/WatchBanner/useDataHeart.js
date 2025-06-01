import { useContext } from 'react';
import { contextData } from './context';
const useDataHeart = () => {
  const dataHeart = useContext(contextData);

  return dataHeart;
};

export default useDataHeart;
