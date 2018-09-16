import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {RkCard,RkText,RkButton,RkTheme} from 'react-native-ui-kitten';


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
        <RkCard rkType='story'>
          <Image rkCardImg source={require('../images/card.png')}/>
          <View rkCardHeader>
            <RkText rkType='header'>Once upon a time</RkText>
          </View>
          <View rkCardContent>
            <RkText style={{textAlign:'center'}}>
              One morning, when Gregor Samsa woke from happy dreams,
              he found himself transformed in ...
            </RkText>
          </View>
          <View rkCardFooter>
            <RkButton rkType='small outline'>Learn More</RkButton>
            <RkButton rkType='small'>Read later</RkButton>
          </View>
        </RkCard>
      </View>
    );
  }
}
RkTheme.setType('RkCard', 'story', {
  img: {
    height: 100,
    opacity: 0.7
  },
  header: {
    alignSelf: 'center'
  },
  content:{
    alignSelf:'center'
  }
});
export default ViewChat;
