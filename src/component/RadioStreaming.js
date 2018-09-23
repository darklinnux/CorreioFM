import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Video from 'react-native-video';

export class RadioStreaming extends Component {
  
  render() {
    return (
        <Video source={{uri: "http://192.99.18.13:8858/live"}}   // Can be a URL or a local file.
            ref={(ref) => {
            this.player = ref
            }}                                      // Store reference
            playInBackground={true}
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onEnd={this.onEnd}                      // Callback when playback finishes
            onError={this.videoError}               // Callback when video cannot be loaded
            audioOnly={true}
            muted={this.props.stop} />
    );
  }
}
