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
import Programacoes from './classes/model/Programacoes_model';
export default class ViewStreaming extends Component {
  constructor(props){
    super(props);
    this.state = {
      listaProgramacao:""
    };
    this.linkRedeSociais={
      facebook: "https://www.facebook.com/correiodecarajas",
      instagram: "https://www.instagram.com/correiodecarajas/",
      twitter: "https://twitter.com/correiocarajas",
      youtube: "https://www.youtube.com/channel/UCigTjobalV2Ie3R6Dy5FGjg"
    }
    this.loadProgramacoes();
    this.loadProgramacoes = this.loadProgramacoes.bind(this);
  }

  loadProgramacoes(){
    Programacoes.loadProgramacoes((programas)=>{
      let state = this.state;
      //state.listaProgramacao = [];
      programas.forEach((programa)=>{
        let retorno = this.programacaoAtual(programa.val().horario,programa.val().fim);
        if(retorno){
          state.listaProgramacao = programa.val().programa;
          //break;
        }
             
      });
      this.setState(state); 
    });
  }

  programacaoAtual(inicio,fim){
    let horaSistema = new Date();
    let inicioProgramacao = new Date();
    let fimProgramacao = new Date();
    //Configurando convertendo as strings em data e hora;
    inicioProgramacao.setHours(inicio.split(":")[0]);
    inicioProgramacao.setMinutes(inicio.split(":")[1]);
    fimProgramacao.setHours(fim.split(":")[0]);
    fimProgramacao.setMinutes(fim.split(":")[1]);

    if(horaSistema >= inicioProgramacao && horaSistema < fimProgramacao){
      return true;
    }else{
      return false;
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
                  titulo={this.state.listaProgramacao}/> 
              </TouchableOpacity>
              </View>
             
              
          
          </View>
          <View style={styles.contbtn}>
            
          
          </View>
          
          <PlayerStreaming titulo={this.state.listaProgramacao} />
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