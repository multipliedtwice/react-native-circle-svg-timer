import { useEffect, useState } from 'react';
import { Animated } from 'react-native';
import { Circle } from 'react-native-svg';

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
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  return {
    RotateData,
    circumference,
    AnimatedCircle,
  };
};
