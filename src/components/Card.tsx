import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import * as styles from '../styles';

export const Card = ({children, ...props}) => {
  return (
    <NeomorphBox
      darkShadowColor={'#A6ABBD'}
      lightShadowColor={'#FAFBFF'}
      swapShadowLevel
      style={{...styles.card}}
      {...props}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.8)', 'rgba(100, 100, 100, 0.01)']}
        start={{x: 0, y: 0}}
        end={{x: 0.9, y: 0.9}}
        style={{
          flex: 1,
          width: styles.card.width,
          height: styles.card.width,
          backgroundBlendMode: 'soft-light, normal',
          ...styles.borders.rounded,
          position: 'absolute',
        }}
      />
      {children}
    </NeomorphBox>
  );
};
