import React from 'react';
import { StyleSheet, View } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={ style.FlexV3 }>
            <Quadrado cor="#000" lado={20} />
            <Quadrado cor="#F00" lado={30} />
            <Quadrado cor="#0F0" lado={40} />
            <Quadrado cor="#00F" lado={50} />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV3: {
        // padding: 20,
        height: 350,
        width: '100%',
        backgroundColor: 'pink',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
    }
})