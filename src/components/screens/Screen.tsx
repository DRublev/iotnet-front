import * as React from 'react';
import { View, Text } from 'react-native';

const Screen: React.FC<{ children: any }> = ({ children }) => {
  return (
    <View>
      <Text>From parent</Text>
      {children}
    </View>
  );
};

export default Screen;
