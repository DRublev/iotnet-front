import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';
import * as styles from '../styles';

export const Card = ({children, ...props}) => {
  return (
    <NeomorphBox
      darkShadowColor={'#A6ABBD'}
      lightShadowColor={'#FAFBFF'}
      style={{...styles.card}}
      {...props}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.08)', 'rgba(200, 200, 200, 0.1)']}
        start={{x: 0, y: 0}}
        end={{x: 0.8, y: 0.8}}
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
