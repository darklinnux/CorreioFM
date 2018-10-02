import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View, 
  ImageBackground,
  Image,
  TouchableOpacity,
  Linking} from 'react-native';
import {Card} from './component/Card';
import {PlayerStreaming} from './component/PlayerStreaming';
export default class ViewStreaming extends Component {
  constructor(props){
    super(props);
    this.linkRedeSociais={
      facebook: "https://www.facebook.com/correiodecarajas",
      instagram: "https://www.instagram.com/correiodecarajas/",
      twitter: "https://twitter.com/correiocarajas",
      youtube: "https://www.youtube.com/channel/UCigTjobalV2Ie3R6Dy5FGjg"
    }
  }

  openRedeSoiciais(url){
    Linking.canOpenURL(url).then(supported => {
      if (!supported) {
        console.log('Can\'t handle url: ' + url);
      } else {
        return Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));
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
  render() {
    return (
      
      <ImageBackground style={styles.container} source={require('../images/backgroundapp.jpg')}>
          <StatusBar backgroundColor="#22315c"/>
          <View style={styles.contmenu}>
              <View>
                <Image source={require('../images/logo.png')} style={styles.logo} />
              </View>
              <View style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:10}}>
                <TouchableOpacity onPress={()=>this.openRedeSoiciais(this.linkRedeSociais.youtube)}>
                  <Image source={require('../images/youtube.png')} style={{marginRight:4}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.openRedeSoiciais(this.linkRedeSociais.facebook)}>
                  <Image source={require('../images/facebook.png')} style={{marginRight:4}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.openRedeSoiciais(this.linkRedeSociais.instagram)}>
                  <Image source={require('../images/instagram.png')} style={{marginRight:4}} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.openRedeSoiciais(this.linkRedeSociais.twitter)}>
                  <Image source={require('../images/twitter.png')} />
                </TouchableOpacity>
              </View>
              
          
          </View>
          <View style={styles.contimagem}>
              <View style={styles.contCard}>
              
              <TouchableOpacity 
                style={styles.contCard}
                onPress={() => {
                  this.props.navigation.navigate("ViewProgramacao");
                }}>
                <Card 
                  source={require("../images/card.jpg")}
                  titulo="Programação"/> 
              </TouchableOpacity>
              </View>
             
              
          
          </View>
          <View style={styles.contbtn}>
            
          
          </View>
          
          <PlayerStreaming />
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
    flex:2,
    maxHeight: 200,
  },
  contCard:{
    flex:2,
    //backgroundColor: 'green',
  },
  
  contbtn:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  btn:{
    
  }
});