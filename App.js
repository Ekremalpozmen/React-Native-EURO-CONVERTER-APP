import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/header';
import Converter from './src/converter';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText='Currency Converter' />
        <Converter />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3'
  }
});