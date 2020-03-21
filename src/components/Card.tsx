import React from 'react';
import {Text, View} from 'react-native';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import * as styles from '../styles';

export const Card = ({children, ...props}) => {
  return (
    <NeomorphBox
      darkShadowColor={'#A6ABBD'}
      lightShadowColor={'#FAFBFF'}
      style={styles.card}
      {...props}>
      {children}
    </NeomorphBox>
  );
};
