import { useEffect, useState } from 'react';

export default function useScrollY() {
  const [srollY, setSrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setSrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return srollY;
}
