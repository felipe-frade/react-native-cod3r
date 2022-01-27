import React, { useState } from 'react';
import Filho from './Filho';
import { Text } from 'react-native';

export default props => {

    const [numero, setNum] = useState(0)

    function warn(value) {
        setNum(value)
        console.warn(value)
    }

    return (
        <>
            <Text>{ numero } </Text>
            <Filho 
                min={1}
                max={5}
                funcao={ warn }
            ></Filho>
        </>
    )
}