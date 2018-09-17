import React from 'react';
import { View, Text } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import ViewStreaming from './ViewStreaming';
import ViewConfig from './ViewConfig';
import ViewChat from './ViewChat';
import ViewUsuario from "./ViewUsuario";
import { createBottomTabNavigator } from 'react-navigation';

const MenuNavegacao = createBottomTabNavigator({
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
    }
}, {
    tabBarPosition:'botton',
    animationEnable:true,
    initialRouteName:'ViewChat',
    tabBarOptions: {
        showLabel:false,
        style: {
            backgroundColor: '#a80f16',
        },
    }
});

export default MenuNavegacao;