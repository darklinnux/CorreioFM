import React, { Component } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import {TabBar} from './component/TabBar'


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
        <TabBar navigation={this.props.navigation} />
      </ImageBackground>
        
    );
  }
}
export default ViewChat;
