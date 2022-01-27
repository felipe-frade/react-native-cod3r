import React from "react";
import { Button } from 'react-native'

export default props => {

    function exec() {
        console.warn('Executar !')
    }

    return (
        <Button title="Executar" onPress={exec}></Button>
    )
}
