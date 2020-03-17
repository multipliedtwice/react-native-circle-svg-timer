import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { useCircularTimer } from './hook';
import { Animated } from 'react-native';

export const CircularTimer = ({
  duration = 15,
  radius = 30,
  strokeWidth = 5,
  fillColor = 'white',
  strokeColor = 'red',
}) => {
  const { RotateData, circumference } = useCircularTimer({ radius, duration });
  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  return (
    <Svg
      width={radius * 2 + strokeWidth * 2}
      height={radius * 2 + strokeWidth * 2}
      style={{ transform: [{ rotate: '-90deg' }] }}
    >
      <AnimatedCircle
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius}
        fill={fillColor}
        strokeDasharray={circumference}
        strokeWidth={strokeWidth}
        strokeDashoffset={RotateData}
        stroke={strokeColor}
      />
    </Svg>
  );
};
