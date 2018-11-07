import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity,Image } from 'react-native';
import {CardTeste} from './component/CardTeste';
import { PlayerStreaming } from './component/PlayerStreaming';
import Programacoes from './classes/model/Programacoes_model';
export default class ViewProgramacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
        listaProgramacao:[]
    };
    this.loadProgramacoes();
  }

  loadProgramacoes(){
    Programacoes.loadProgramacoes((programas)=>{
      let state = this.state;
      state.listaProgramacao = [];
      programas.forEach((childItem)=>{
        state.listaProgramacao.push({
            key:childItem.key,
            horario:childItem.val().horario,
            programa:childItem.val().programa,
            apresentador:childItem.val().apresentador
          });
        this.setState(state);      
      });
    });
  }
  static navigationOptions = ({navigation}) => ({
    headerTransparent: true,
    tabBarIcon: ({focused}) => {
        return(
          <Image source={require('../images/note.png')} >
              </Image>
        );
    }
    
  });

  render() {
    return (
      <View style={modalEstilo.cotainer}>
          <View style={modalEstilo.containerLista}>
            <FlatList
              data={this.state.listaProgramacao}
              renderItem={({item})=>{
                  return(
                      <TouchableOpacity onPress={()=> {}}>
                          <View style={modalEstilo.modaContCard}>
                              <CardTeste
                                  source={require("../images/card.jpg")}
                                  horario={item.horario}
                                  programacao={item.programa}
                                  apresentador={item.apresentador}/> 
                          </View>
                      </TouchableOpacity>
                  );
              }}/>
              {/* <PlayerStreaming />   */}
          </View>
      </View>
    );
  }
}

const modalEstilo = StyleSheet.create({
    cotainer:{
      flex: 1,
    },
    containerLista:{
      flex: 1,
    },
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
