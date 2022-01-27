import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import estilo from '../estilo';

export default props => {
    return (
        <View style={ style.Display }>
            <Text style={ [estilo.font32, style.DisplayText] }>
                { props.num }
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000000',
        padding: 10,
        width: 100
    },
    DisplayText: {
        color: '#ffffff',
    }
})