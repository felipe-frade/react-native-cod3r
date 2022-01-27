import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

export default props => {
    return (
        <>
            <Text style={ estilo.font32 }>{ props.a }</Text>
            <Text style={ estilo.font32 }>{ props.b }</Text>
        </>
    )
}