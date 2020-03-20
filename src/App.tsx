import React from 'react';
import { Text, Button } from 'react-native';
import {
  InitialState,
  NavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './components/screens';

declare var global: { HermesInternal: null | {} };

type BottomTabParams = {
  Home: undefined;
};

const BottomTabsNavigator = createBottomTabNavigator<BottomTabParams>();

export const App: () => React$Node = () => {
  const containerRef = React.useRef<NavigationContainerRef>();
  const [initialState] = React.useState<InitialState | undefined>();

  return (
    <NavigationContainer ref={containerRef} initialState={initialState}>
      <BottomTabsNavigator.Navigator
        screenOptions={{
          tabBarButton: props => <Button title="Pop" />,
        }}
      >
        <BottomTabsNavigator.Screen
          name="Article"
          options={{
            title: 'Article',
            tabBarIcon: <Text> Yep</Text>,
          }}
          component={Home}
        />
      </BottomTabsNavigator.Navigator>
    </NavigationContainer>
  );
};
