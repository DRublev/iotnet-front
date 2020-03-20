import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as styles from '../../styles';

const Screen: React.FC<{ children: any }> = ({ children }) => {
  return (
    <View style={style.container}>
      <Text>From parent</Text>
      {children}
    </View>
  );
};

export default Screen;

const style = StyleSheet.create({
  container: {
    ...styles.container,
  },
});
