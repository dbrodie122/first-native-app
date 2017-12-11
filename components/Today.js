import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Today extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>The Today page.</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    width: '100%'
  }
})

export default Today;