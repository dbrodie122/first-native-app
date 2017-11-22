import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from './components/AppButton';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    console.log('pressed')
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <AppButton title='Tap to Start' onPress={this.onButtonPress}/>
        </View>
        <View style={styles.row}>
          <AppButton title='Today' onPress={this.onButtonPress}/>
          <AppButton title='History' onPress={this.onButtonPress}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    justifyContent: 'center',
    width: '100%'
  },
  column: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
})
