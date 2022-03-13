import React from 'react';
import { Text, FlatList } from 'react-native';
import estilo from '../estilo';

import produtos from './produtos';

export default props => {
    const lista = ( { item: p } ) => {
        return <Text> {p.id} { p.nome } - R$ { p.preco } </Text>
    }
    return (
        <>
            <Text style={ estilo.font32 }>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={ produtos }
                keyExtractor={ i => i.id + '' }
                renderItem={ lista }
            />
        </>
    )
}