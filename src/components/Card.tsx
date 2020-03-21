import React from 'react';
import {Text, View} from 'react-native';
import MultipleShadowsView from './wrappers/MultipleShadowsView';
import {NeomorphBox} from 'react-native-neomorph-shadows';
import * as styles from '../styles';

export const Card = ({children, ...props}) => {
  return (
    <NeomorphBox
      darkShadowColor={"#FF3333"} //<- set this
      lightShadowColor="#3344FF" //<- this
      style={{
        shadowOpacity: 0.3, //<- and this or yours opacity
        shadowRadius: 15,
        borderRadius: 50,
        backgroundColor: '#ECF0F3',
        width: 200,
        height: 200,
        alignItems: 'center',
      }}>
      {children}
    </NeomorphBox>
  );
};
