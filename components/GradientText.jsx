import React from 'react';
import {Text} from 'react-native';
import Svg, {
  LinearGradient,
  Text as SvgText,
  Defs,
  Stop,
} from 'react-native-svg';

export default function GradientText({text, colors}) {
  return (
    <Svg height="40" width="200">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
          {colors.map((color, index) => (
            <Stop
              key={index}
              offset={`${index * (100 / colors.length)}%`}
              stopColor={color}
            />
          ))}
        </LinearGradient>
      </Defs>
      <SvgText
        fontFamily="Poppins-SemiBold"
        fill="url(#grad)"
        fontSize="20"
        
        fontWeight="bold"
        x="0"
        y="20">
        {text}
      </SvgText>
    </Svg>
  );
}
