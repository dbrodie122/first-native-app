import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from './BackgroundImage';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <BackgroundImage>
        <Text style={styles.text}>Home</Text>
      </BackgroundImage>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:12,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  text: {
    backgroundColor: 'transparent',
    color: 'black'
  }
})
