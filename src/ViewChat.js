import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import {TabBar} from './component/TabBar'
import { PlayerStreaming } from './component/PlayerStreaming';


class ViewChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({navigation}) => ({
    headerTransparent: true,
    tabBarIcon: ({focused}) => {
        return(
          <Image source={require('../images/message.png')} >
              </Image>
        );
    }
    
  });
  render() {
    return (
      <ImageBackground style={{flex:1,justifyContent:'flex-end',}} source={require('../images/backgroundapp.jpg')}>
        <PlayerStreaming />
      </ImageBackground>
        
    );
  }
}
export default ViewChat;
