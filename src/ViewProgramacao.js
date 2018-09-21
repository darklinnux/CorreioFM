import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import {CardTeste} from './component/CardTeste';

export default class ViewProgramacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <ScrollView>
            <TouchableOpacity onPress={()=> {}}>
                <View style={modalEstilo.modaContCard}>
                    <CardTeste
                        source={require("../images/card.jpg")}
                        horario="8 Horas"
                        programacao="Voz da manhã"/> 
                </View>
            </TouchableOpacity>
                <View style={modalEstilo.modaContCard}>
                    <CardTeste
                        source={require("../images/card2.jpg")}
                        horario="Programação"
                        programacao="Voz da manhã"/> 
                </View>
                <View style={modalEstilo.modaContCard}>
                    <CardTeste
                        source={require("../images/card.jpg")}
                        horario="Programação"
                        programacao="Voz da manhã"/> 
                </View>
                <View style={modalEstilo.modaContCard}>
                    <CardTeste
                        source={require("../images/card2.jpg")}
                        horario="Programação"
                        programacao="Voz da manhã"/> 
                </View>
                <View style={modalEstilo.modaContCard}>
                    <CardTeste
                        source={require("../images/card.jpg")}
                        horario="Programação"
                        programacao="Voz da manhã"/> 
                </View>
                <View style={modalEstilo.modaContCard}>
                    <CardTeste
                        source={require("../images/card2.jpg")}
                        horario="Programação"
                        programacao="Voz da manhã"/> 
                </View>
                <View style={modalEstilo.modaContCard}>
                    <CardTeste
                        source={require("../images/card.jpg")}
                        horario="Programação"
                        programacao="Voz da manhã"/> 
                </View>
                <View style={modalEstilo.modaContCard}>
                    <CardTeste
                        source={require("../images/card2.jpg")}
                        horario="Programação"
                        programacao="Voz da manhã"/> 
                </View>
            </ScrollView>
      </View>
    );
  }
}

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
