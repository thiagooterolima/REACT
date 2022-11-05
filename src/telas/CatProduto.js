import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Alert,TextInput} from 'react-native';
import  SelectList  from 'react-native-dropdown-select-list';
import Vendedor from '../../componets/vendedor';
import Drop from '../../componets/Drop';



     export default function Categoria ({navigation}){
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
                    />
                     <TextInput style={styles.quant}
                     placeholder ="00.00"
                     keyboardType='numeric'
                     />

                        <Button style = {styles.buttonadic}
                        title = 'adicionar'
                        color='green'
                         />
                </View>

                <Text style={styles.text}>PRODUTOS</Text>

                 <View style={styles.prod}>
                    <Text>SOJA R$ 96,00 8KG  +      -</Text>
                    <Text>CAFE R$ 44,00 2KG  +      -</Text>
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
        paddingTop:5,
        paddingLeft:40,
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
        borderColor:'#0E6643' 
    },
   

    
   
  });

  



  