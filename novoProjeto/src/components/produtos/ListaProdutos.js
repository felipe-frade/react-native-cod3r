import React from 'react';
import { Text } from 'react-native';
import estilo from '../estilo';

import produtos from './produtos';

export default props => {
    const lista = () => {
        return produtos.map(p => {
            return (
                <Text key={ p.id } > 
                    ({ p.id }) { p.nome } custa R$ { p.preco }
                </Text>
            )
        })
    }
    return (
        <>
            <Text style={ estilo.font32 }>
                Lista de Produtos
            </Text>
            {
                lista()
            }
        </>
    )
}