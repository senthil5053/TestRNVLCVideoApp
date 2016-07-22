import React, { Component } from 'react';
import {
 AppRegistry
} from 'react-native';
import Video  from './Video.js';

class TestRNVLCVideoApp extends Component {

  render() {
    //const uri = 'http://www.youtube.com/watch?v=HgKaKWomh-A';
    const uri = 'rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mov';
    return (
      <Video uri={uri} />
    );
  }  
}

AppRegistry.registerComponent('TestRNVLCVideoApp', () => TestRNVLCVideoApp);