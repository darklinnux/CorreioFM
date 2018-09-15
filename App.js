import React from 'react';
import { View, Text } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import MyAppStackNavigator from './src/MenuNavegacao'
import { createDrawerNavigator } from 'react-navigation';




const MyApp = createDrawerNavigator({
  Home: {
    screen: MyAppStackNavigator,
  }
});

export default MyApp;