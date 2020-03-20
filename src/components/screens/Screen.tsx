import * as React from 'react';
import { View } from 'react-native';

const Screen: React.FC<{ children: any }> = ({ children }) => {
  return <View>{children}</View>;
};

export default Screen;
