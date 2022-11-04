import { SafeAreaView, StyleSheet, Text, View,Button,Alert } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Vendedor from '../../componets/vendedor';
import Dados from './ListagemDados';
import { TextInput } from 'react-native-gesture-handler';
import Drop1 from '../../componets/drop2';
 

export default function Pagamento ({navigation}) {
    return (
        <SafeAreaView> 
          <Vendedor/>

          <View style={estilos.pagamento}>
                <Text  style={estilos.pagamentoTexto}>Forma de Pagamento</Text>
            </View>

            <View style={estilos.total}>
                <Text style={estilos.total1}>Total: </Text>
                <Text style={estilos.total2}>R$: 0,00</Text>
            </View>

            <View style={estilos.total3}>
                <Text style={estilos.totalPago}>Valor pago</Text>
                <TextInput style={estilos.borda}></TextInput>
            </View>

            <View>
                <Drop1/>
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

    total:{  //refere a view onde tem o texto e o valor do total
        flexDirection: 'row',
        paddingLeft: 25,
        
        
    },

    total1: { //refere a o texto Total
        color: 'green',
        fontWeight: 'bold',
        fontSize: 18,
    },

    total2: { //refere a o valor numerico do total
        fontSize: 18,
    },

    borda:{ // refere a borda do input
        borderWidth: 1,
        width: 100,
        borderRadius: 10,
        marginLeft: 10,
        color: 'green',
    },

    total3: { //refere a view onde tem o valor pago e o input
        justifyContent: "flex-start",
        flexDirection: 'row',
        padding: 10,
        marginLeft: 15,
        
    },

    totalPago: { //refere a palavra Valor pago
        fontSize: 17,
        color: 'green'
    }
   
});