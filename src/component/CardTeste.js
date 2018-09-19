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
            borderRadius: 10,
            borderColor: '#000',
        },
        contTitulo:{
            padding: 10,
            flex:1
        },
        titulo: {
            zIndex: 999,
            color:'black',
            fontWeight: 'bold',
            fontSize:20
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
                    <Text style={styles.titulo}>{this.props.titulo}</Text>
                </View>
                <View style={styles.contImagem}>
                    <Image source={require("../../images/logo.png")} />
                </View>
            </ImageBackground>
        </View>
    );
  }
}