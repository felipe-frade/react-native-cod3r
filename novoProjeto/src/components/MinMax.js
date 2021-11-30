import React from "react";
import { Text } from 'react-native'

import Estilo from './estilo'

export default (props) => {
    console.warn(props)
    return (
        <Text style={Estilo.font32}>
            O valor de { props.max } é maior do que { props.min }!
        </Text>
    )
}