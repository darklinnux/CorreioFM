import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

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
      <View>
        <Text> View Chat </Text>
      </View>
    );
  }
}

export default ViewChat;
