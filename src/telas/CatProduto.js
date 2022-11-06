import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Alert,TextInput} from 'react-native';
import { IconButton } from "react-native-paper";
import Vendedor from '../../componets/vendedor';
import Drop from '../../componets/Drop';
import { useState } from 'react';




     export default function Categoria ({navigation}){
        const [valor,setValor]=useState(0)
        const Soja = () => setValor(valor => valor + Number.parseInt(9.99))
        const _Soja = () => setValor(valor => valor - Number.parseInt(9.99))

        const [kg,setPeso]=useState(0)
        const Peso = () => setPeso(peso => peso +1)
        const _Peso = () => setPeso(peso => peso -1)

        const [valor1,setValor1]=useState(0)
        const Cafe = () => setValor1(valor1 => valor1 + Number.parseInt(2.2))
        const _Cafe = () => setValor1(valor1 => valor1 - Number.parseInt(2.2))

        const [kg1,setPeso1]=useState(0)
        const Peso1 = () => setPeso1(peso1 => peso1 +1)
        const _Peso1 = () => setPeso1(peso1 => peso1 -1)


        


      

     return(

        
        <SafeAreaView> 
          
               <Vendedor></Vendedor>
           
                <Drop></Drop>

                <View style ={styles.container}>
                <Text style={styles.texto}>Preço Sugerido R$: </Text>
                <TextInput style={styles.input} placeholder='00.00' keyboardType='numeric'></TextInput>
                <Text style={styles.quantidade}>Quantidade</Text> 
                </View>

                <View style={styles.place}>
                    <TextInput style={styles.border}
            
                    placeholder ="Valor : R$ 180.00"
                    keyboardType='numeric'
                    />
                     <TextInput style={styles.quant}
                     placeholder ="00"
                     keyboardType='numeric'
                     />

                        <Button style = {styles.buttonadic}
                        title = 'adicionar'
                        color='green'
                        
                         />
                </View>

                <Text style={styles.text}>PRODUTOS</Text>

                 <View style={styles.prod}>
                    <Text>SOJA R$ </Text>
                    <TextInput value={String(valor)}></TextInput>
                    <Text>   KG   </Text>
                     <TextInput value={String(kg)}></TextInput>
                    
                    
                    <View style={styles.icon}>
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

                <View style={styles.prod1}>
                    <Text>CAFÉ R$</Text>
                    <TextInput value={String(valor1)}></TextInput>
                    <Text>   KG   </Text>
                     <TextInput value={String(kg1)}></TextInput>
                
                  <View style={styles.icon2}>
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







                </View>

                 <View style={styles.tot}>
                 <TextInput placeholder='TOTAL R$ 140,00'></TextInput>
                 </View>

                 

            <View style={styles.botao}>
                 
               <View style={styles.direito}>
                <Button
                 title='AVANÇAR'
                 color='green'
                 onPress={() => navigation.navigate('Pagamento')}
                 />
               </View>
               
              <View style={styles.esquerdo}> 
               <Button
                color='red'
                title ="CANCELAR"
                onPress={() => Alert.alert('PEDIDO CANCELADO')}
                />
              </View>
       
             </View>


         </SafeAreaView> 

       
    );

}


const styles = StyleSheet.create({
    container :{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        height: 20,
        flexDirection: 'row',

    },
    botao : {
        justifyContent:'center',
        marginHorizontal:16,
        flexDirection:'row-reverse',
        marginTop:'5%',
                
        
    },

    esquerdo : {
        paddingRight:190,
    },     
        
    direit0 : {

    },
    input: {
        fontSize: 15,
    },

    texto: {
        marginLeft: 15,
    },
    quantidade :{
        marginLeft: 45,
    },
    place:{
     display: 'flex',
     justifyContent: 'flex-start',
     flexDirection:'row',
     height:40,
     width:-10,

    
    },
    border:{
     height:30,
     margin:12,
     borderWidth:1,
     padding:5,
     borderRadius:15,
     borderColor:'#0E6643'
    },
    quant:{
     marginLeft:90,   
     height:30,
     margin:12,
     borderWidth:1,
     padding:5,
     borderRadius:15,
     borderColor:'#0E6643',
    },
    text :{
        color:'green',
        paddingTop:60,
        paddingLeft:40,
    },
    prod : {
        paddingTop:3,
        paddingLeft:40,
       // backgroundColor:'green',
        marginBottom:5,
        flexDirection:'row'
    },
    prod1 : {
        paddingLeft:40,
        //backgroundColor:'green',
        flexDirection:'row'
     
    },
    
    tot :{
        marginLeft:130,
        height:38,
        margin:50,
        width:130,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderWidth:1,
        padding:5,
        borderRadius:15,
        borderColor:'#0E6643',
        marginTop:'12%' 
    },
    icon : {
        flexDirection: 'row',
        marginVertical:-10,
        marginLeft:20,
        marginBottom:-9
    },
    icon2 : {
        flexDirection: 'row',
        marginVertical:-10,
        marginLeft:21,
    }
    //ddd

  });

  



  