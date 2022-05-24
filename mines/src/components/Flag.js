import React from 'react';
import { View, StyleSheet } from 'react-native';

export default props => {
    return (
        <View style={ styles.container }>
            <View style={ [ styles.flagPole, props.bigger ? styles.flagPoleBig: null ] }></View>
            <View style={ [ styles.flag, props.bigger ? styles.flagBig: null ] }></View>
            <View style={ [ styles.base1, props.bigger ? styles.base1Big: null ] }></View>
            <View style={ [ styles.base2, props.bigger ? styles.base2Big: null ] }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flagPole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3,
    },
    base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10
    },
    base2: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    flagPoleBig: {
        position: 'absolute',
        height: 18,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 16
    },
    flagBig: {
        position: 'absolute',
        height: 10,
        width: 14,
        backgroundColor: '#F22',
        marginLeft: 3,
    },
    base1Big: {
        position: 'absolute',
        height: 4,
        width: 12,
        backgroundColor: '#222',
        marginLeft: 12,
        marginTop: 20
    },
    base2Big: {
        position: 'absolute',
        height: 4,
        width: 20,
        backgroundColor: '#222',
        marginLeft: 8,
        marginTop: 24
    }
})