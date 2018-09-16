import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {Card} from './component/Card'


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
      <View style={{height:400,backgroundColor: 'green',}}>
        <Card 
          source={require("../images/card.jpg")}
          titulo="Programação"/> 
      </View>
    );
  }
}
export default ViewChat;
