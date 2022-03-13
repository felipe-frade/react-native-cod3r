import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import estilo from './estilo';

export default props => {
    const [ nome, setNome ] = useState('Teste')
    return (
        <View>
            <Text>{ nome }</Text>
            <TextInput
                placeholder="Digite seu nome"
                onChangeText={ nome => setNome(nome) }
                value={ nome }
            />
        </View>
    )
}