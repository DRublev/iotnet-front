import React from 'react';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import * as styles from '../../styles';

export const Card = ({children, ...props}) => {
  return (
    <NeomorphBox
      darkShadowColor={'#A6ABBD'}
      lightShadowColor={'#FAFBFF'}
      swapShadowLevel
      style={{...styles.card}}
      {...props}>
      {children}
    </NeomorphBox>
  );
};
