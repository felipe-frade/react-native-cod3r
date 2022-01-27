import React from 'react';
import { Text, Button } from 'react-native';
import estilo from '../estilo';

export default ({ min, max, funcao }) => {
    function num(min, max) {
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min;
    }
    
    return (
        <>
            <Button 
                title="Executar"
                onPress={ 
                    function() {
                        let valor = num(min, max)
                        funcao(valor)
                    } 
                }
            />
        </>
    )
}