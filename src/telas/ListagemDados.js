import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Alert, TextInput } from 'react-native';
import Vendedor from '../../componets/vendedor';


export default function Dados ({navigation}){
    return(
       
        <SafeAreaView>
          <Vendedor/>


          <View style={estilos.ValorData}>
                <View>
                    <Text style={estilos.fonte}>Valor</Text>
                    <TextInput style={estilos.fonteInput} placeholder='R$100:00'></TextInput>
                </View>

                <View>
                    <Text style={estilos.fonte}>Data</Text>
                    <TextInput style={estilos.fonteInput} placeholder='05/11/2022'></TextInput> 
                    <View style={estilos.adicionar}><Button title='Alterar' color='green' onPress={() => navigation.navigate("Pagamento")}/></View>
                </View>
                
            </View>
          
          
          <View style={estilos.total}>
                <Text style={estilos.total1}>Observação: </Text>
                <TextInput style={estilos.fonteInput2}></TextInput>
                
            </View>

            <View style={estilos.obs}><Text>Observação pedido/entrega/cliente</Text></View>

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

    fonteInput2:{
        fontSize:18,
        borderWidth: 1,
        width: 200,
        borderRadius: 20,
        paddingLeft: 8,
        
    },
     
    obs:{
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
    },
   
    


    // separaçao

    ValorData:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginLeft: -90,
        paddingTop: 20,
        paddingBottom: 20,
        
    },

    fonte: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    adicionar: { //botao adicionar
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,        
    },

    container: { // container do input de valor e data
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    botaoContainer: {
        marginRight: -50,
    }
        
    
});





     
   

  
