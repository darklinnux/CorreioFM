import React from 'react';
import { View, Text } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import ViewStreaming from './src/ViewStreaming'
import { createDrawerNavigator } from 'react-navigation';




const MyApp = createDrawerNavigator({
  Home: {
    screen: ViewStreaming,
  },
  Notifications: {
    screen: ViewStreaming,
  },
});

export default MyApp;