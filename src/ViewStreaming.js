import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text, 
  ImageBackground,
  Image,
  TouchableOpacity} from 'react-native';
import {Card} from './component/Card';
import Video from 'react-native-video';
export default class ViewStreaming extends Component {

  constructor(props){
    super(props);
    this.state = {play:true}
    this.playRadio = this.playRadio.bind(this);
  }

  

  static navigationOptions = ({navigation}) => ({
    headerTransparent: true,
    tabBarIcon: ({focused}) => {
        return(
          <Image source={require('../images/home.png')} >
              </Image>
        );
    }
    
  });

  playRadio(){
    let radioState = this.state;
    radioState.play = (this.state.play) ? false : true;
    this.setState(radioState);
  }
  render() {
    return (
      
      <ImageBackground style={styles.container} source={require('../images/backgroundapp.jpg')}>
          <StatusBar backgroundColor="#22315c"/>
          <View style={styles.contmenu}>
              <View>
                <Image source={require('../images/logo.png')} style={styles.logo} />
              </View>
              <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:10}}>
                <Image source={require('../images/youtube.png')} style={{marginRight:4}} />
                <Image source={require('../images/facebook.png')} style={{marginRight:4}} />
                <Image source={require('../images/instagram.png')} style={{marginRight:4}} />
                <Image source={require('../images/twitter.png')} />
              </View>
              
          
          </View>
          <View style={styles.contimagem}>
              <Card 
                source={require("../images/card.jpg")}
                titulo="Programação"/> 
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
          <View style={styles.contbtn}>
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
  },
  contmenu:{
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 10,
  },
  contimagem:{
    flexDirection: 'row',
    flex:1,
  },
  contbtn:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  btn:{
    
  }
});