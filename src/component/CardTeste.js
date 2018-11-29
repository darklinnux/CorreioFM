import React, { Component } from 'react';
import { View, Text,StyleSheet, ImageBackground,Image} from 'react-native';

export class CardTeste extends Component {

  render() {
    let styles = StyleSheet.create({
        container:{
            flex:1,
            //overflow: 'hidden',
            height: "70%",
            /* marginLeft: 10,
            marginRight: 10,
            marginTop: 10, */
            //borderBottomStartRadius:0,
            //borderRadius: 10,
            borderTopWidth:1,
            borderColor: '#fff',
        },
        contTitulo:{
            paddingTop:60,
            paddingLeft:140,
            padding: 10,
            flex:1,
            justifyContent:'center',
            alignContent: 'center',
        },
        titulo: {
            textAlign:'center',
            zIndex: 999,
            color:'white',
            fontWeight: 'bold',
            fontSize:25
        },
        contImagem:{
            flex: 1,
            justifyContent: 'flex-end',
        },

    });
    return (
        <View style={{flex:1}}>
            <ImageBackground style={styles.container} source={this.props.source}>
                <View style={styles.contTitulo}>
                    <Text style={styles.titulo}>{this.props.horario}</Text>
                    <Text style={styles.titulo}>{this.props.programacao}</Text>
                    <Text style={styles.titulo}>{this.props.apresentador}</Text>
                </View>
                <View style={styles.contImagem}>
                    {/* <Image source={require("../../images/logo.png")} /> */}
                </View>
            </ImageBackground>
        </View>
    );
  }
}