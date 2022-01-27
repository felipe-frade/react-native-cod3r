import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';

export default props => {
    if(Platform.OS === 'android'){
        return (
            <>
                <Text style={ style.Teste }>Android</Text>
            </>
        )
    }else if(Platform.OS === 'ios'){
        return (
            <>
                <Text style={ style.Teste }>IOS</Text>
            </>
        )
    }
}

const style = StyleSheet.create({
    Teste: {
        position: 'absolute',
        top: 0
    }
})