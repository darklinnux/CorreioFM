import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ViewUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({navigation}) => ({
    headerTransparent: true,
    tabBarIcon: ({focused}) => {
        return(
          <Image source={require('../images/user.png')} >
              </Image>
        );
    }
    
  });
  render() {
    return (
      <View>
        <Text> View Usuario </Text>
      </View>
    );
  }
}

export default ViewUsuario;
