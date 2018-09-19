import React, { Component } from 'react';
import {View,StyleSheet,ScrollView} from 'react-native';
import CardTeste from './CardTeste'

export class ListaDeProgramacao extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let listaProg = StyleSheet.create({
        modaContCard:{
          height: 200,
          backgroundColor: 'white',
        }
      });
    return (
      <View>
        <ScrollView>
                    <View style={listaProg.modaContCard}>
                      <CardTeste
                      source={require("../../images/card.jpg")}
                      titulo="Programação"/> 
                    </View>
                    <View style={listaProg.modaContCard}>
                      <CardTeste
                      source={require("../../images/card2.jpg")}
                      titulo="Programação"/> 
                    </View>
                    <View style={listaProg.modaContCard}>
                      <CardTeste
                      source={require("../../images/card.jpg")}
                      titulo="Programação"/> 
                    </View>
                    <View style={listaProg.modaContCard}>
                      <CardTeste
                      source={require("../../images/card2.jpg")}
                      titulo="Programação"/> 
                    </View>
                    <View style={listaProg.modaContCard}>
                      <CardTeste
                      source={require("../../images/card.jpg")}
                      titulo="Programação"/> 
                    </View>
                    <View style={listaProg.modaContCard}>
                      <CardTeste
                      source={require("../../images/card2.jpg")}
                      titulo="Programação"/> 
                    </View>
                    <View style={listaProg.modaContCard}>
                      <CardTeste
                      source={require("../../images/card.jpg")}
                      titulo="Programação"/> 
                    </View>
                    <View style={listaProg.modaContCard}>
                      <CardTeste
                      source={require("../../images/card2.jpg")}
                      titulo="Programação"/> 
                    </View>
                  </ScrollView>
      </View>
    );

  }
}
