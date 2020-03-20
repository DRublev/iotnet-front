import React from 'react';
import { View, Text } from 'react-native';
import Screen from './Screen';
import * as styles from '../../styles';

export const Home = () => {
  return (
    <Screen>
      <View>
        <View style={styles.card}>
          <Text>Yep, yep</Text>
        </View>
      </View>
    </Screen>
  );
};
