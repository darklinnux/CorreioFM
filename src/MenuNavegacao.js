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
        //activeTintColor: '#e91e63',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: 'transparent',
        },
    }

});

export default MenuNavegacao;