import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import params from './src/params';
import Field from './src/components/Field';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

export default class App extends Component {
  render(){
    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>teste</Text>
        <Text>
          Tamanho da grade: { params.getColumnsAmount() } x { params.getRowsAmount() }
        </Text>

        <Field />
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={4}/>
        <Field opened nearMines={5}/>
        <Field opened nearMines={6}/>
        <Field opened nearMines={7}/>
      </View>
    );
  }
};