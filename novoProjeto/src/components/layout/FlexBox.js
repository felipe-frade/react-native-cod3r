import React from 'react';
import { StyleSheet, View } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={ style.FlexV1 }>
            <Quadrado cor="#000" />
            <Quadrado cor="#F00" />
            <Quadrado cor="#0F0" />
            <Quadrado cor="#00F" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        padding: 20,
        flex: 1,
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'pink'
    }
})