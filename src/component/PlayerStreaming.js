import React, { Component } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import RadioStreaming from './RadioStreaming';

export class PlayerStreaming extends Component {
  constructor(props) {
    super(props);
    this.state = {play:true};
    this.playRadio = this.playRadio.bind(this);
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
              backgroundColor: 'black',
              justifyContent: 'flex-end',
              alignContent: 'center',
              height: 50,
          },
          iconPlay:{
              marginTop: 5,
              marginRight: 5,
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
            <Text style={styles.tituloProgramacao}>Voz da manhã</Text>
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
