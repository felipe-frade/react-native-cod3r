import React from 'react';
import { Text } from 'react-native';
import Filho from './Filho';

export default props => {
    return (
        <>
            <Filho a={ 1 } b={ 2 }></Filho>
            <Filho a={ 3 } b={ 4 }></Filho>
        </>
    )
}