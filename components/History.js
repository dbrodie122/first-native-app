import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>The History page.</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'violet',
    width: '100%'
  }
})

export default History;