import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';

// import Priemiro from './components/Primeiro';
// import X, { Comp1, Comp2 } from './components/Multi'
// import MinMax from './components/MinMax';
// import Aleatorio from './components/Aleatorio';
// import Titulo from './components/Titulo';
// import Botao from './components/Botao';
// import Contador from './components/Contador';
// import Pai from './components/direta/Pai';
// import Pai from './components/indireta/Pai';
// import ContadorDisplay from './components/contador/ContadorDisplay';
// import Contador2 from './components/contador/Contador2';
import Diferenciar from './components/Diferenciar';
import ParImpar from './components/ParImpar';

export default () => (
    <SafeAreaView style={ style.App }>
        {/* <Priemiro></Priemiro> */}
        {/* <Botao></Botao> */}
        {/* <Contador inicial={100} passo={10}></Contador>
        <Contador></Contador> */}
        {/* <Titulo principal="Titulo" secundario="Subtítulo"/> */}
        {/* <MinMax min={3} max={20}></MinMax> */}
        {/* <Aleatorio min={1} max={5} /> */}
        {/* <Pai></Pai> */}
        {/* <Contador2></Contador2> */}
        <ParImpar num={2}></ParImpar>
        <Diferenciar></Diferenciar>
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