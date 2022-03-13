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
// import FlexBox from './components/layout/FlexBox';
// import FlexBox from './components/layout/FlexBoxV2';
// import FlexBox from './components/layout/FlexBoxV3';
// import FlexBox from './components/layout/FlexBoxV4';
// import DigiteSeuNome from './components/DigiteSeuNome';

// import ListaProdutos from './components/produtos/ListaProdutos';
// import ListaProdutos from './components/produtos/ListaProdutosV2';
// import ParImpar from './components/ParImpar';

// import Familia from './components/relacao/Familia';
// import Membro from './components/relacao/Membro';
// import UsuarioLogado from './components/UsuarioLogado';
import Mega from './components/mega/Mega';


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
        {/* <ParImpar num={2}></ParImpar> */}
        {/* <Familia>
            <Membro nome="teste" sobrenome="da silva"></Membro>
            <Membro nome="maria" sobrenome="da silva"></Membro>
        </Familia>
        <Familia>
            <Membro nome="jose" sobrenome="pereira"></Membro>
            <Membro nome="joao" sobrenome="pereira"></Membro>
        </Familia> */}
        {/* <UsuarioLogado usuario={ { nome: 'felipe', email: 'teste@teste.com' } } />
        <UsuarioLogado usuario={ { nome: 'felipe' } } /> */}
        {/* <ListaProdutos /> */}
        {/* <DigiteSeuNome/> */}
        {/* <FlexBox/> */}

        <Mega num={3} />

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