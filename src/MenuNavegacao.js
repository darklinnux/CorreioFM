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
        
        style: {
            backgroundColor: '#a80f16',
        },
    }
});

export default MenuNavegacao;