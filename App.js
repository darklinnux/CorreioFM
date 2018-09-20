import React from 'react';
import { View, Text } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import ViewStreaming from './src/ViewStreaming';
import ViewConfig from './src/ViewConfig';
import ViewChat from './src/ViewChat';
import ViewUsuario from "./src/ViewUsuario";
import ViewProgramacao from "./src/ViewProgramacao";
import { createStackNavigator } from 'react-navigation';


const MyApp = createStackNavigator({
  ViewConfig: {
    screen: ViewConfig,
  },
  ViewStreaming: {
      screen: ViewStreaming,
  },
  ViewChat: {
      screen: ViewChat,
  },
  ViweUsuario: {
      screen: ViewUsuario,
  },
  ViewProgramacao:{
    screen: ViewProgramacao
  }
},{
  headerMode:"none",
  initialRouteName:"ViewStreaming",
  animateEnable:false
});

export default MyApp;