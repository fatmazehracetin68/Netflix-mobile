import {View, Text, Image} from 'react-native';
import React from 'react';

export default function Logo() {
  return (
    <Image
      style={{width: 150, height: 50, marginBottom: 5}}
      source={{
        uri: 'https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png',
      }}
    />
  );
}
