import { useEffect, useState } from 'react';

export const useCircularTimer = ({ radius, totalTime }) => {
  const circumference = 2 * Math.PI * radius;
  const [dashOffset, setDashOffset] = useState(0);

  const animation = () => {
    return setDashOffset(prev => {
      return prev <= 0 ? circumference : prev - 0.225;
    });
  };

  useEffect(() => {
    const timer = setInterval(animation, circumference / totalTime);

    return () => clearInterval(timer);
  }, []);

  return {
    dashOffset,
    circumference,
  };
};
