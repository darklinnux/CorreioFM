import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text, 
  ImageBackground,
  Image,
  TouchableOpacity} from 'react-native';
import Video from 'react-native-video';
const BtnMenu = ()=>{
  return(
    <View>
      <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}>
          <Image
            source={require("../images/menu.png")}
          />
      </TouchableOpacity>
    </View>
  );  
};
export default class ViewStreaming extends Component {

  constructor(props){
    super(props);
    this.state = {play:true}
    this.playRadio = this.playRadio.bind(this);
  }

  

  static navigationOptions = ({navigation}) => ({
    headerTransparent: true,
    //headerLeft: BtnMenu()
    
  });

  playRadio(){
    let radioState = this.state;
    radioState.play = (this.state.play) ? false : true;
    this.setState(radioState);
  }
  render() {
    return (
      
      <View style={styles.container}>
          <View style={styles.contmenu}>
              <Text>Texto Menu</Text>
          
          </View>
      </View>
    
        


    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contmenu:{
    backgroundColor:'green'
  }
})