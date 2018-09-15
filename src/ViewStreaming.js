import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View, 
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
    headerLeft: BtnMenu()
    
  });

  playRadio(){
    let radioState = this.state;
    radioState.play = (this.state.play) ? false : true;
    this.setState(radioState);
  }
  render() {
    return (
      
      <ImageBackground
      source={require('../images/backgroundapp.jpg')}
      style={styles.container}>
      <StatusBar backgroundColor="#22315c" />
      <View styles={styles.contimage}>

       <Image
      source={require('../images/logo.png')}
      style={styles.logo}>
      
      
      </Image>
      <Video source={{uri: "http://192.99.18.13:8858/live"}}   // Can be a URL or a local file.
              ref={(ref) => {
              this.player = ref
              }}                                      // Store reference
              playInBackground={true}
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onEnd={this.onEnd}                      // Callback when playback finishes
              onError={this.videoError}               // Callback when video cannot be loaded
              audioOnly={true}
              muted={this.state.play} />
      </View>
      <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.playRadio}>
          <Image
            style={styles.botao}
            source={(this.state.play) ? 
              require("../images/playbotao.png")
              :require("../images/stopbotao.png")}
          />
          </TouchableOpacity>
    </View>
    

      </ImageBackground>
    
        


    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  contimage:{
    flex: 1,
  },
  areaBtn:{
    flex:1,
    justifyContent: 'flex-end',
    
    
  },
  logo: {
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  botao:{
  
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom:50
  }
})