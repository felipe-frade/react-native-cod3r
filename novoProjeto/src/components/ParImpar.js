import React from 'react';
import { Text } from 'react-native';
import estilo from './estilo';

export default props => {
    // if(props.num % 2 === 0){
    //     return (
    //         <>
    //             <Text style={ estilo.font32 }> Par </Text>
    //         </>
    //     )
    // }else{
    //     return (
    //         <>
    //             <Text style={ estilo.font32 }> Impar </Text>
    //         </>
    //     )        
    // }
    return (
        <>
            {
                props.num % 2 === 0 ?
                <Text style={ estilo.font32 }> Par </Text> :
                <Text style={ estilo.font32 }> Impar </Text>
            }
        </>
    )
}