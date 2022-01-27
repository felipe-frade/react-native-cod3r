import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import estilo from '../estilo';

export default props => {
    return (
        <View style={ style.View }>
            <Button style={ style.Button } title="+" onPress={props.inc} ></Button>
            <Button style={ style.Button } title="-" onPress={props.dec}></Button>
        </View>
    )
}

const style = StyleSheet.create({
    View: {
        display: "flex",
        flexDirection: "row"
    },
    Button: {
        fontSize: 32,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 50,
        paddingRight: 50,
    }
})