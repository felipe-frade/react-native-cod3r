import React from 'react';
import { StyleSheet, View } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={ style.FlexV2 }>
            <Quadrado cor="#000" />
            <Quadrado cor="#F00" />
            <Quadrado cor="#0F0" />
            <Quadrado cor="#00F" />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        flex: 1,
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        backgroundColor: 'pink'
    }
})