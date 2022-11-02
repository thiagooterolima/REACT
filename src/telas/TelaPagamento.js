import { SafeAreaView, StyleSheet, Text, View,Button,Alert } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Vendedor from '../../componets/vendedor';
import Dados from './ListagemDados';
 

export default function Pagamento ({navigation}) {
    return (
        <SafeAreaView> 
          <Vendedor/>

          <View style={estilos.pagamento}>
                <Text  style={estilos.pagamentoTexto}>Forma de Pagamento</Text>
            </View>

            <View style={estilos.total}>
                <Text style={estilos.total1}>Total: </Text>
                <Text>R$: 0,00</Text>
            </View>

        <View style={estilos.botao}>
            <View style={estilos.direito}>
            <Button
                 title='AVANÇAR'
                 color='green'
                 onPress={() => navigation.navigate('Confirmar Dados')}
                 />
            </View>     

            
            <View style={estilos.esquerdo}>
            <Button
                color='red'
                title ="VOLTAR"
                onPress={() => navigation.navigate('Categoria Produto')}
                />
            </View>         

        
</View>    
        </SafeAreaView>
    );
}



const estilos = StyleSheet.create ({
    bar: {
     height: 50,
     position: 'absolute',
     backgroundColor: 'blue',
    },    

    botao:{
      justifyContent:'center',
      marginHorizontal:16,
      flexDirection:'row-reverse',
      marginTop:'85%',
    },
    direito: {

    },
    
    esquerdo:{
        paddingRight:190,
    },

    pagamentoTexto: {
        fontWeight: 'none',
        fontSize: 23,
    },

    pagamento:{
        padding: 20,
    },

    total:{
        flexDirection: 'row',
        paddingLeft: 25,
        
        
    },

    total1: {
        color: 'green',
        fontWeight: 'bold',
    }
   
});