import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, NetInfo } from 'react-native';
import {RadioStreaming} from './RadioStreaming';

export class PlayerStreaming extends Component {
  constructor(props) {
    super(props);
    this.state = {play:true,tituloProgramacao:'CorreioFM 92.1'};
    this.conexaoEvento = this.conexaoEvento.bind(this);
    this.playRadio = this.playRadio.bind(this);
    NetInfo.isConnected.addEventListener('connectionChange',this.conexaoEvento)
    
  }

  conexaoEvento(info){
    let state = this.state;
    if(!info){
      state.tituloProgramacao = 'Sem conexão com internet!!!';
    }else{
      state.tituloProgramacao = 'Rádio Correio FM 92.1';
    }
    this.setState(state);
  }
    playRadio(){
        let radioState = this.state;
        radioState.play = (this.state.play) ? false : true;
        this.setState(radioState);
    }

  render() {
      let styles = StyleSheet.create({
          container:{
              
              flexDirection: 'row',
              backgroundColor: '#a80f16',
              justifyContent: 'flex-end',
              alignContent: 'center',
              height: 50,
          },
          iconPlay:{
              marginTop: 5,
              marginRight: 30,
              height: 36,
              width: 36,
          },
          containerTitulo:{
            flex:1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          tituloProgramacao:{
              color: "white",
              fontSize:20
          }
      });
    return (
      <View style={styles.container}>
        <RadioStreaming stop={this.state.play} />
        <View style={styles.containerTitulo}>
            <Text style={styles.tituloProgramacao}>{this.state.tituloProgramacao}</Text>
        </View>
        <View>
            <TouchableOpacity onPress={this.playRadio}>
                <Image 
                    source={(this.state.play) ? 
                        require("../../images/playbotao.png")
                        :require("../../images/stopbotao.png")}
                    style={styles.iconPlay}
                    /> 
            </TouchableOpacity> 
        </View>
      </View>
    );
  }
}
