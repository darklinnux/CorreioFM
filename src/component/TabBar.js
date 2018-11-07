import React, { Component } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {RadioStreaming} from './RadioStreaming';

export class TabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
          play:true}
        this.playRadio = this.playRadio.bind(this);
    }
    playRadio(){
        let radioState = this.state;
        radioState.play = (this.state.play) ? false : true;
        this.setState(radioState);
    }

  render() {
    let styles = StyleSheet.create({
        container: {
          flex: 1,
          //backgroundColor: '#ecf0f1',
        }, 
        content: {
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'center',
          //backgroundColor: '#ecf0f1'
        }, 
        
        tabbar: {
          height: 50, 
          backgroundColor: '#a80f16', 
          flexDirection: 'row'
        }, 
        
        iconColumn: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center', 
        }, 
      
        fixIcon: {
          backgroundColor: 'transparent',
          width: 70,
          height: 83,
          position: 'absolute', 
          //marginLeft: -25, 
          left: '41%'
        }
      });
      
    return (
        <View style={{height: 65}}> 
        <View style={[styles.tabbar, {marginTop: 16}]}>
          <TouchableOpacity style={styles.iconColumn} onPress={()=> this.props.navigation.navigate('ViewConfig')}>
            <Image source={require('../../images/settings.png')} />
          </TouchableOpacity> 
          <TouchableOpacity style={styles.iconColumn} onPress={()=> this.props.navigation.navigate('ViewStreaming')}>
            <Image source={require('../../images/home.png')} />
          </TouchableOpacity>
          <View style={styles.iconColumn}>
          </View>
          <TouchableOpacity style={styles.iconColumn} onPress={()=> this.props.navigation.navigate('ViewChat')}>
            <Image source={require('../../images/message.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconColumn} onPress={()=> this.props.navigation.navigate('ViewUsuario')}>
            <Image source={require('../../images/user.png')} />
          </TouchableOpacity>
        </View>
           <View style={[styles.tabbar, styles.fixIcon]}>
            <RadioStreaming stop={this.state.play} />
            <TouchableOpacity style={styles.iconColumn} onPress={this.playRadio}>
              <Image 
                source={(this.state.play) ? 
                    require("../../images/playbotao.png")
                    :require("../../images/stopbotao.png")}
                style={{zIndex: 999,marginTop: -20}} /> 
            </TouchableOpacity> 
        </View> 
      </View> 
    );
  }
}
