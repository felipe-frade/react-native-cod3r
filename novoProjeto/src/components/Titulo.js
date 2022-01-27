import React, { Fragment } from "react";
import { View, Text } from 'react-native'
import estilo from "./estilo";

export default props => {
    return(
        <>
            <Text style={estilo.textoGrande}>{ props.principal }</Text>
            <Text style={estilo.center}>{ props.secundario }</Text>
        </>
    )
}