import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class ViewConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({navigation}) => ({
    headerTransparent: true,
    tabBarIcon: ({focused}) => {
        return(
          <Image source={require('../images/settings.png')} >
              </Image>
        );
    }
    
  });
  render() {
    return (
      <View>
        <Text> View Configuração </Text>
      </View>
    );
  }
}

export default ViewConfig;
