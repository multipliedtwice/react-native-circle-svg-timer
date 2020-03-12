import React from 'react';
import Svg, { Circle } from 'react-native-svg';
import { useCircularTimer } from './hook';

export const CircularTimer = ({
  totalTime = 15,
  radius = 30,
  strokeWidth = 2,
  fillColor = 'white',
  strokeColor = 'red',
}) => {
  const { dashOffset, circumference } = useCircularTimer({ radius, totalTime });

  return (
    <Svg width={radius * 2 + strokeWidth * 2} height={radius * 2 + strokeWidth * 2}>
      <Circle
        cx={radius + strokeWidth}
        cy={radius + strokeWidth}
        r={radius}
        fill={fillColor}
        strokeDasharray={circumference}
        strokeWidth={strokeWidth}
        strokeDashoffset={dashOffset}
        stroke={strokeColor}
      />
    </Svg>
  );
};
