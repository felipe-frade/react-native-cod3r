import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, Button, FlatList } from 'react-native'
import estilo from '../estilo'
import Numero from './Numero'

export default class Mega extends Component {

    state = {
        num: +this.props.num,
        numeros: []
    }

    changeNum = (qt) => {
        this.setState({ num: +qt })
    }

    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo
    }

    gerarNumeros = () => {
        const numeros = Array(this.state.num).fill()
            .reduce((nums) => [...nums, this.gerarNumeroNaoContido(nums)], [])
        this.setState({ numeros })
    }

    exibirNumeros = () => {
        const nums = this.state.numeros
        return nums.map((num, index) => {
            return <Numero num={ num } key={ index }></Numero>
        })
    }

    render(){
        return (
            <>
                <Text style={ estilo.font32 }>
                    Gerador de Mega sena
                </Text>

                <Button
                    title='Gerar numeros'
                    onPress={ this.gerarNumeros }
                />

                <TextInput 
                    keyboardType={'numeric'}                    
                    style={ { borderBottomWidth: 1 } }
                    placeholder='Quantos numeros'
                    value={ this.state.num + '' }
                    onChangeText={ qt => this.changeNum(qt) }
                />

                {/* <View style={ lista.lista }>
                    {
                        this.state.numeros.map((numero, index) => {
                            return <Text key={ index } style={ estilo.font32 }> { numero } </Text>
                        })
                    }
                </View> */}

                <View style={ lista.lista }>
                    { this.exibirNumeros() }
                </View>
            </>
        )
    }
}

const lista = StyleSheet.create({
    lista: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'scroll'
    }
})