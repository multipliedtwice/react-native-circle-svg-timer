import { useEffect, useState } from 'react';
import { Animated } from 'react-native';

export const useCircularTimer = ({ radius, duration }) => {
  const circumference = 2 * Math.PI * radius;
  const [dashOffset] = useState(new Animated.Value(0));
  useEffect(() => {
    StartImageRotate();
  }, []);

  function StartImageRotate() {
    dashOffset.setValue(0);

    Animated.timing(dashOffset, {
      toValue: 1,
      duration: duration * 1000,
      useNativeDriver: true,
    }).start(() => StartImageRotate());
  }

  const RotateData = dashOffset.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return {
    RotateData,
    circumference,
  };
};
