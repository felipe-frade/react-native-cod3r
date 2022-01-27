import React from "react";
import { Text } from "react-native";
import Estilo from './estilo'

export default (props) => {
    if(props.min && props.max){
        props.min += 1000;
        props.max += 1000;
        const { min, max } = props
        let aleatoio = Math.floor(Math.random() * (max - min)) + min;
        setTimeout(() => {
            aleatoio = Math.floor(Math.random() * (max - min)) + min 
        }, 2000);
        return (
            <Text style={ Estilo.font32 }>O valor aleatório é { aleatoio } </Text>
        )
    }else{
        return (
            <Text style={ Estilo.font32 }>Não dado o valor mínimo e máximo</Text>
        )
    }
}