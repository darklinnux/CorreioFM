/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View} from 'react-native';
import Video from 'react-native-video';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {play:true,label:'Play'}
    this.playRadio = this.playRadio.bind(this);
  }

  playRadio(){
    let radioState = this.state;
    if(radioState.play){
        radioState.play = false;
        radioState.label = "stop";
    }else {
      radioState.play = true;
      radioState.label = "play";
    }
    this.setState(radioState);
  }
  render() {
    return (
      <View style={styles.container}>

        <Button title={this.state.label} onPress={this.playRadio} />

          <Video source={{uri: "http://192.99.18.13:8858/live"}}   // Can be a URL or a local file.
              ref={(ref) => {
              this.player = ref
              }}                                      // Store reference
              playInBackground={true}
              onBuffer={this.onBuffer}                // Callback when remote video is buffering
              onEnd={this.onEnd}                      // Callback when playback finishes
              onError={this.videoError}               // Callback when video cannot be loaded
              audioOnly={true}
              paused={this.state.play} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
});
