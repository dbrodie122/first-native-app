import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import { AppButton } from './components/AppButton';
import Today from './components/Today';
import History from './components/History';

const Home = (props) => {
  return (
    <View style={styles.top}>
      <Text>Home</Text>
    </View>
  )
}

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
          <Route exact={true} path="/" component={Home}/>
          <Route path="/today" component={Today}/>
          <Route path="/history" component={History}/>
        </Switch>
          <View style={styles.row}>
          <Link to='/'>
            <Text>Home</Text>
          </Link> 
            <Link to='/today'>
              <Text>Today</Text>
            </Link> 
            <Link to='/history'>
              <Text>History</Text>
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
    justifyContent: 'space-around',
    width: '100%'
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
  },
  top: {
    flex:3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
