import React from 'react';
import { StyleSheet, View } from 'react-native';

import Quadrado from './Quadrado';

export default props => {
    return (
        <View style={ style.FlexV4 }>
            <View style={ style.v0 }></View>
            <View style={ style.v1 }></View>
            <View style={ style.v2 }></View>
        </View>
    )
}

const style = StyleSheet.create({
    FlexV4: {
        width: 100,
        flexGrow: 1,
        backgroundColor: 'pink',
    },
    v0:{
        backgroundColor: 'yellow',
        height: 100,
    },
    v1:{
        backgroundColor: 'red',
        flexGrow: 4
    },
    v2:{
        backgroundColor: 'green',
        flexGrow: 1
    }
})