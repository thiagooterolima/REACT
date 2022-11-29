import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Alert, TextInput } from 'react-native';
import Vendedor from '../../componets/vendedor';
import { IconButton } from "react-native-paper";
import { useState } from 'react';


export default function Dados ({navigation}){
    const [valor,setValor] = useState(0);
       
    const Soja = () => setValor(valor + 9); 
    const _Soja = () => {
    if ( valor > 0){
        setValor(valor -9);
    }
    else {
        Alert.alert('Ja esta Zerado')
    }
    } 

    const [peso,setPeso]=useState(0);

    const Peso = () => setPeso(peso + 1);
    const _Peso = () => {
    if (peso > 0) {
    setPeso(peso - 1);
    }   
    }
    

    const [valor1,setValor1]=useState(0)
    const Cafe = () => setValor1(valor1 + 2 )
    const _Cafe = () => {
        if (valor1 > 0 ){
         setValor1(valor1 -2);
        } else {
            Alert.alert('Ja esta Zerado')
        }
    }

    const [kg1,setPeso1]=useState(0)
    const Peso1 = () => setPeso1(kg1 + 1)
    const _Peso1 = () => {
        if (kg1 > 0){
            setPeso1(kg1 -1);
        }
    }
    return(
       
        <SafeAreaView>
          <Vendedor/>

            <Text style={estilos.prod}>PRODUTOS</Text>
            <View style={estilos.prod1}>
             <Text>SOJA R$  </Text>

             <View style={estilos.soja}>
             <Text> {valor}</Text>
             </View>

             <Text>  KG  </Text>
             <View style={estilos.soja}>
             <Text>{peso}</Text>
             </View>

             <View style={estilos.icon}>
             <IconButton
              icon="plus"
              size={20}
              onPress={() =>{Soja();Peso();}}
              />
           
             <IconButton
              icon="minus"
              size={20}
              onPress={() =>{_Soja();_Peso();}}
              />
              </View>
             </View>

             <View style={estilos.prod2}>
                    <Text>CAFÉ R$   </Text>
                    <View style={estilos.cafe}>
                     <Text>{valor1}</Text>
                     </View>

                    <Text>  KG </Text>
                    <View style={estilos.cafe}>
                     <Text>{kg1}</Text>
                    </View>
                
                  <View style={estilos.icon2}>
                  <IconButton
                      icon="plus"
                      size={20}
                      onPress={() =>{Cafe();Peso1();}}
                     />

                    <IconButton
                      icon="minus"
                      size={20}
                      onPress={() =>{_Cafe();_Peso1();}}
                     />
                  </View>

                  <Button style = {estilos.button}
                        title = 'Alterar'
                        color='green'
                        onPress={() => navigation.navigate('Categoria Produto')}
                        
                         />

                </View>

          



          
          
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
    prod:{
        color:'green',
        marginLeft:'10%',
        fontSize:17,
        marginTop:40,
    },
    cafe:{
        height:22
    },
    soja:{
        height:22,
    },
    icon : {
        flexDirection: 'row',
        marginVertical:-10,
        marginLeft:20,
        marginBottom:-9
    },
    prod1:{
        paddingTop:3,
        paddingLeft:40,
        marginBottom:9,
        flexDirection:'row'
    },
    prod2:{
        paddingLeft:40,
        flexDirection:'row'
    },
    icon2:{
        flexDirection: 'row',
        marginVertical:-10,
        marginLeft:25,
    },
    button:{
        marginVertical:30,

    }
       
 
});





     
   

  
