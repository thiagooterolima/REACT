import { SafeAreaView, StyleSheet, Text, View,Button,Alert } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Vendedor from '../../componets/vendedor';
 

export default function Pagamento ({navigation}) {
    return (
        <SafeAreaView> 
          <Vendedor/>

        <View style={estilos.botao}>
            <View style={estilos.direito}>
            <Button
                 title='AVANÇAR'
                 color='green'
                 onPress={() => navigation.navigate('Confirmar Dados')}
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
    }
    
})