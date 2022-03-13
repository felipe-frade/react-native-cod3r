import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default props => {
    const lado = props.lado || 50
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor || '#000'
        }}>

        </View>
    )
}

// const style = StyleSheet.create({

// })