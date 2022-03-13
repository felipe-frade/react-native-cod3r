import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Button from './src/components/Button';
import Display from './src/components/Display';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class App extends Component {
  state = {...initialState} 

  addDigit = n => {
    const { displayValue, clearDisplay, current } = this.state

    const clear = displayValue === '0' || clearDisplay
    if(n === '.' &&  !clear && displayValue.includes('.')){
      return
    }
    const currentValue = clear ? '' : displayValue
    const display = currentValue + n
    this.setState({ displayValue: display, clearDisplay: false })
    
    if(n !== '.'){
      const newValue = parseFloat(display)
      const values = [...this.state.values]
      values[current] = newValue
      this.setState({ values })
    }
  }

  clearMemory = () => {
    this.setState({ ...initialState })
  }

  setOperation = operation => {
    const { current } = this.state
    if(current === 0){
      this.setState({ operation, current: 1, clearDisplay: true })
    } else {
      const equals = operation === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: '' + values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  calculate = () => {
  }

  render(){
    return (
      <View style={ styles.container }>
        <Display value={this.state.displayValue} />
        <View style={ styles.buttons }>
          <Button onClick={this.clearMemory} label='AC' triple />
          <Button onClick={this.setOperation} label='/' oparation />
          <Button onClick={this.addDigit} label='7' />
          <Button onClick={this.addDigit} label='8' />
          <Button onClick={this.addDigit} label='9' />
          <Button onClick={this.setOperation} label='*' oparation />
          <Button onClick={this.addDigit} label='4' />
          <Button onClick={this.addDigit} label='5' />
          <Button onClick={this.addDigit} label='6' />
          <Button onClick={this.setOperation} label='-' oparation />
          <Button onClick={this.addDigit} label='1' />
          <Button onClick={this.addDigit} label='2' />
          <Button onClick={this.addDigit} label='3' />
          <Button onClick={this.setOperation} label='+' oparation />
          <Button onClick={this.addDigit} label='0' double />
          <Button onClick={this.addDigit} label='.' />
          <Button onClick={this.setOperation} label='=' oparation />
        </View>
      </View>
    );
  }
};