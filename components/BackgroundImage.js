import React from 'react';
import { Image, View } from 'react-native';

const BackgroundImage = (props) => {
  const resizeMode = 'stretch';
  return (
    <Image
      style={{
        flex: 1,
        resizeMode,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
      }}
      source={require('../static/home-bg.jpg')}
    >
    {props.children}
    </Image>
  );
}
export default BackgroundImage