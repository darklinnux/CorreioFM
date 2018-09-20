import React, {Component} from 'react';
import {
  StyleSheet,
  StatusBar,
  View, 
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  Text,
  TouchableHighlight,
  ScrollView} from 'react-native';
import {Card} from './component/Card';
import {CardTeste} from './component/CardTeste';
import {TabBar} from './component/TabBar';
import ViewProgramacao from './ViewProgramacao';
export default class ViewStreaming extends Component {
  //state = {modalVisible:false}
  constructor(props){
    super(props);
    this.state = {modalVisible:false}
    this.setModalVisible = this.setModalVisible.bind(this);
    this.mudarTela = this.mudarTela.bind(this);
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  mudarTela(tela){
    this.setModalVisible(false);
    this.props.navigation.navigate(tela);
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
                <TouchableOpacity>
                  <Image source={require('../images/youtube.png')} style={{marginRight:4}} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../images/facebook.png')} style={{marginRight:4}} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../images/instagram.png')} style={{marginRight:4}} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../images/twitter.png')} />
                </TouchableOpacity>
              </View>
              
          
          </View>
          <View style={styles.contimagem}>
              <View style={styles.contCard}>
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <View>
                  <View>
                    <ScrollView>
                      <TouchableOpacity onPress={()=> this.mudarTela('ViewProgramacao')}>
                        <View style={modalEstilo.modaContCard}>
                          <CardTeste
                          source={require("../images/card.jpg")}
                          titulo="Programação"/> 
                        </View>
                      </TouchableOpacity>
                      <View style={modalEstilo.modaContCard}>
                        <CardTeste
                        source={require("../images/card2.jpg")}
                        titulo="Programação"/> 
                      </View>
                      <View style={modalEstilo.modaContCard}>
                        <CardTeste
                        source={require("../images/card.jpg")}
                        titulo="Programação"/> 
                      </View>
                      <View style={modalEstilo.modaContCard}>
                        <CardTeste
                        source={require("../images/card2.jpg")}
                        titulo="Programação"/> 
                      </View>
                      <View style={modalEstilo.modaContCard}>
                        <CardTeste
                        source={require("../images/card.jpg")}
                        titulo="Programação"/> 
                      </View>
                      <View style={modalEstilo.modaContCard}>
                        <CardTeste
                        source={require("../images/card2.jpg")}
                        titulo="Programação"/> 
                      </View>
                      <View style={modalEstilo.modaContCard}>
                        <CardTeste
                        source={require("../images/card.jpg")}
                        titulo="Programação"/> 
                      </View>
                      <View style={modalEstilo.modaContCard}>
                        <CardTeste
                        source={require("../images/card2.jpg")}
                        titulo="Programação"/> 
                      </View>
                    </ScrollView>
                  </View>
                  <View style={modalEstilo.modalContButton}>
                    <TouchableHighlight
                      onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }}>
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>
              <TouchableOpacity 
                style={styles.contCard}
                onPress={() => {
                  this.setModalVisible(true);
                }}>
                <Card 
                  source={require("../images/card.jpg")}
                  titulo="Programação"/> 
              </TouchableOpacity>
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

const modalEstilo = StyleSheet.create({
  modaContCard:{
    height: 200,
    backgroundColor: 'white',
  },
  modalContButton:{
    //flex:1,
    //zIndex: 2222,
    backgroundColor: 'red',
  }
});