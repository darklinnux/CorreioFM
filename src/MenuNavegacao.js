import React from 'react';
import { View, Text } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import ViewStreaming from './ViewStreaming'
import { createBottomTabNavigator } from 'react-navigation';

const MenuNavegacao = createBottomTabNavigator({
    Home: {
        screen: ViewStreaming,
    },
}, {
    tabBarOptions: {
        showLabel: true,
        activeTintColor: '#fff',
        inactiveTintColor: '#bdb1cc',
        style: {
            backgroundColor: 'rgba(22, 22, 22, 0.3)',
            borderTopWidth: 1,
            borderTopColor: '#353535',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
        },
    }
});

export default MenuNavegacao;