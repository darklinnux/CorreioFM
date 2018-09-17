import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View, 
  ImageBackground,
  Image,
  TouchableOpacity} from 'react-native';
import {Card} from './component/Card';
import {TabBar} from './component/TabBar'
export default class ViewStreaming extends Component {

  constructor(props){
    super(props);
    this.state = {
      play:true}
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
              <View style={styles.contCard}>
                <Card 
                  source={require("../images/card.jpg")}
                  titulo="Programação"/> 
              </View>
              <View style={styles.contParceiros}>

              </View>
              
          
          </View>
          <View style={styles.contbtn}>
            
          
          </View>
          <TabBar 
            navigation={this.props.navigation}
            />
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
  },
  contCard:{
    flex:2,
    //backgroundColor: 'green',
  },
  contParceiros:{
    flex : 1,
    backgroundColor: 'white',
    marginTop: 15,
  },
  contbtn:{
    flex:1,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  btn:{
    
  }
});