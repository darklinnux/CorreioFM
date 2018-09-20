import React, { Component } from 'react'
import { Text, View, StyleSheet, ImageBackground,Image} from 'react-native'
import {TabBar} from './component/TabBar';

export default class ViewProgramacao extends Component {
  render() {
      let styles = StyleSheet.create({
        container: {
            flex:1,
        },
        cabecalho: {
            height: 250,
            alignItems: 'center',
            justifyContent: 'center'
        },
        descricaoCont:{
            flex: 1
        },

        tituloContainer:{
            backgroundColor: '#99bbff',
            alignItems: 'center',
            justifyContent: 'center',
            height: 30,
            borderWidth: 1,
            borderColor: 'black',
        },
        tituloProgramacao:{
            fontWeight: 'bold',
        },
        linhaTexto:{
            borderWidth: 1,
            borderColor: 'black',
            borderTopColor: 'transparent',
            flex: 2,
            alignItems: 'center',
            backgroundColor: 'white',
        },
        programacaoContainer:{
            flexDirection: 'row',
        },
        colunaHorario:{
            flex: 1
        }
      });
    return (
      
        <ImageBackground style={styles.container} source={require('../images/backgroundapp.jpg')}>

        <ImageBackground style={styles.cabecalho} source={require('../images/programacao1.jpg')}>
            <Image source={require('../images/logo.png')}/> 
        </ImageBackground>
        <View style={styles.descricaoCont}>
            <View style={styles.tituloContainer}>
                <Text style={styles.tituloProgramacao}>
                    SEGUNDA FEIRA
                </Text>
            </View>
            <View style={styles.programacaoContainer}>
              <View style={[styles.linhaTexto,styles.colunaHorario]}>
                  <Text style={styles.tituloProgramacao}>HORARIO</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text style={styles.tituloProgramacao}>PROGRAMA</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text style={styles.tituloProgramacao}>LOCUTOR</Text>
              </View>
            </View>
            <View style={styles.programacaoContainer}>
                <View style={[styles.linhaTexto,styles.colunaHorario]}>
                  <Text>05:00</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>A Voz da Manhã</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Elson Gomes</Text>
              </View>
            </View>
            <View style={styles.programacaoContainer}>
            <View style={[styles.linhaTexto,styles.colunaHorario]}>
                  <Text>08:00</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Fala Cidade</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Marcinho Lira</Text>
              </View>
            </View>
            <View style={styles.programacaoContainer}>
            <View style={[styles.linhaTexto,styles.colunaHorario]}>
                  <Text>11:00</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Correio Noticias</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Milton Faria</Text>
              </View>              
            </View>
            <View style={styles.programacaoContainer}>
            <View style={[styles.linhaTexto,styles.colunaHorario]}>
                  <Text>12:00</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Sintonizado em Vc</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Vilma Lira</Text>
              </View>
            </View>
            <View style={styles.programacaoContainer}>
            <View style={[styles.linhaTexto,styles.colunaHorario]}>
                  <Text>15:00</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Estação 92</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Leverson Oliveira</Text>
              </View>
            </View>
            <View style={styles.programacaoContainer}>
            <View style={[styles.linhaTexto,styles.colunaHorario]}>
                  <Text>20:00</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Sertanejando</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Alec Dias</Text>
              </View>
            </View>
            <View style={styles.programacaoContainer}>
            <View style={[styles.linhaTexto,styles.colunaHorario]}>
                  <Text>22:00</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Correio do Amor</Text>
              </View>
              <View style={styles.linhaTexto}>
                  <Text>Alec Dias</Text>
              </View>
            </View>
        </View>
        <TabBar
        navigation={this.props.navigation}
        />
     </ImageBackground>
      
    )
  }
}