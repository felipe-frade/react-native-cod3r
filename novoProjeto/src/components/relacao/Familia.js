import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

export default props => {
    return (
        <>
            <Text style={ estilo.font32 }> Membros da família </Text>
            { props.children }
        </>
    )
}