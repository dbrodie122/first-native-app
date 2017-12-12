import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import { AppButton } from './components/AppButton';
import Today from './components/Today';
import History from './components/History';
import Home from './components/Home';



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
      <NativeRouter>
        <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/today" component={Today}/>
        </Switch>
          <View style={styles.row}>
          <Link to='/'>
            <Text>Home</Text>
          </Link> 
            <Link to='/today'>
              <Text>Today</Text>
            </Link> 
          </View>
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    zIndex: 2,
    backgroundColor: 'transparent'
  },
  column: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  blockButton: {
    height: 150,
    width: 150,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  startButton: {
    height: 150,
    width: 150,
    backgroundColor: '#FFF',
    justifyContent: 'center'
  }
})
