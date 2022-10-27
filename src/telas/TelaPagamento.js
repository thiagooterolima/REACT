import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import Categoria from './src/telas/CatProduto';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import BotCat from '../../componets/BotaoCat';
import Vendedor from '../../componets/vendedor';


const Pagamento = () => {
    return (
        <SafeAreaView>
            
            
        <Vendedor/>


        <BotCat/>

        </SafeAreaView>
    );
}

export default Pagamento;

const estilos = StyleSheet.create ({
    bar: {
        height: 50,
        position: 'absolute',
        backgroundColor: 'blue',
    }
})