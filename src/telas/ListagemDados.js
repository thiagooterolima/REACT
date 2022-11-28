import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Alert, TextInput } from 'react-native';
import Vendedor from '../../componets/vendedor';


export default function Dados ({navigation}){
    return(
       
        <SafeAreaView>
          <Vendedor/>

          
          
          <View style={estilos.total}>
                <Text style={estilos.total1}>Total: </Text>
                <TextInput style={estilos.fonteInput}></TextInput>
            </View>

         <View style={estilos.botao}>
            <View style={estilos.direito}>
            <Button
                 title='CONFIRMAR'
                 color='green'
                 onPress={() => Alert.alert('Pedido Confirmado')}
                 
                 />
            </View>     

            <View style={estilos.esquerdo}>
            <Button
                color='red'
                title ="VOLTAR"
                onPress={() => navigation.navigate('Pagamento')}
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

    fonteInput:{
        fontSize:18,
        borderWidth: 1,
        width: 100,
        borderRadius: 20,
        paddingLeft: 8,
        
    },
       
   
    

        
    
});





     
   

  
