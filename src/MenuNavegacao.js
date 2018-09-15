import React from 'react';
import { View, Text } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import ViewStreaming from './ViewStreaming'
import { createStackNavigator } from 'react-navigation';

const MenuNavegacao = createStackNavigator({
    Home: {
        screen: ViewStreaming,
    },
}, {
    //headerMode: 'none'
});

export default MenuNavegacao;