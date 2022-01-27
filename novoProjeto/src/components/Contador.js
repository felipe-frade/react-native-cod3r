import React, { useState } from "react";
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default ({ inicial = 0, passo = 1 }) => {
    // let numero = inicial ? inicial : 0
    const [ numero, setNumero ] = useState(inicial ? inicial : 0)
    
    const inc = () => setNumero(numero + (passo ? passo : 1))
    const dec = () => setNumero(numero - (passo ? passo : 1))
    
    return (
        <>
            <Text style={ Estilo.font32 }>{ numero }</Text>
            <Button title="+" onPress={inc}></Button>
            <Button title="-" onPress={dec}></Button>
        </>
    )
}
