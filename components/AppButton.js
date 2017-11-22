import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export const AppButton = (props) => {
  return (
    <View>
      <Button title={props.title} onPress={props.onPress}></Button>
    </View>
  );
}