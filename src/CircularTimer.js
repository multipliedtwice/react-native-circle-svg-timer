import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { useCircularTimer } from './hook';

export const CircularTimer = ({
  duration = 15,
  radius = 30,
  strokeWidth = 10,
  fillColor = 'transparent',
  strokeColor = 'lightblue',
  strokeBgColor = 'grey',
}) => {
  const { RotateData, circumference, AnimatedCircle } = useCircularTimer({
    radius,
    duration,
  });

  return (
    <Svg
      width={radius * 2 + strokeWidth * 2}
      height={radius * 2 + strokeWidth * 2}
      style={{ transform: [{ rotate: '-90deg' }] }}
    >
      <Circle
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius}
        fill={fillColor}
        strokeWidth={strokeWidth}
        stroke={strokeBgColor}
      />

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

      {/* Circle for creating stroke outline effect */}
      <Circle
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius - strokeWidth / 2}
        fill={fillColor}
      />
    </Svg>
  );
};
