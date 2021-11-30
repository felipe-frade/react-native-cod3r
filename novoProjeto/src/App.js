import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

import Priemiro from './components/Primeiro';
import X, { Comp1, Comp2 } from './components/Multi'
import MinMax from './components/MinMax';

export default () => (
    <SafeAreaView style={ style.App }>
        <Priemiro></Priemiro>
        <MinMax min={3} max={20}></MinMax>
    </SafeAreaView> 
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
})