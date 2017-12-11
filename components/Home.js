import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex:12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
