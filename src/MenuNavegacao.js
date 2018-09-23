import React from 'react';
import { View, Text } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import ViewStreaming from './ViewStreaming';
import ViewConfig from './ViewConfig';
import ViewChat from './ViewChat';
import ViewUsuario from "./ViewUsuario";
import { createBottomTabNavigator } from 'react-navigation';
import ViewProgramacao from './ViewProgramacao';

const MenuNavegacao = createBottomTabNavigator({
    ViewStreaming: {
        screen: ViewStreaming,
    },
    ViewProgramacao:{
        screen: ViewProgramacao
    },
    ViewChat: {
        screen: ViewChat,
    },
    ViweUsuario: {
        screen: ViewUsuario,
    }
}, {
    tabBarPosition:'botton',
    animationEnable:true,
    initialRouteName:'ViewProgramacao',
    tabBarOptions: {
        showLabel:false,
        style: {
            backgroundColor: '#a80f16',
        },
    }
});

export default MenuNavegacao;