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

            <View style={estilos.containerValor}> 
                <TextInput style={estilos.borda1} placeholder="0,00">Valor</TextInput>
                <TextInput style={estilos.borda2} placeholder="dd/mm/aa"></TextInput>
                <View style={estilos.adicionar}><Button title='Adicionar' color='green' onPress={() => navigation.navigate}/></View>
            </View>

            <View><Text style={estilos.textoPagamento}>Pagamentos</Text></View>

            <View style={estilos.ValorData}>
                <View>
                    <Text style={estilos.fonte}>Valor</Text>
                    <TextInput style={estilos.fonteInput} placeholder='R$100:00'></TextInput>
                </View>

                <View>
                    <Text style={estilos.fonte}>Data</Text>
                    <TextInput style={estilos.fonteInput} placeholder='05/11/2022'></TextInput>
                </View>
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
      marginTop: '32%',
      
      
    },
    
    
    esquerdo:{
        paddingRight:190,
    },

    direito:{

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

    borda1: { // borda do segundo input do valor valor
        borderWidth:1,
        width: 100,
        borderRadius: 20,
        paddingLeft: 8,
        
        
    },

    borda2: {
        textAlign: 'center',
        borderWidth: 1,
        width: 100,
        borderRadius: 20,

    },

    containerValor: { // container do input de valor e data
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    },

    adicionar: { //botao adicionar
        borderWidth: 1,
        marginRight: 10,
        
    },

    textoPagamento:{// refere a o texto pagamento em baixo de valor e data
        fontSize: 19,
        color: 'green',
        fontWeight: 'bold',
        paddingTop: 20,
        marginLeft: 27,
        marginTop: 30,
        paddingBottom: 15,
    },

    ValorData:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: -90,
        
    },

    fonte: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    fonteInput:{
        fontSize:18,
        
    },
   

});