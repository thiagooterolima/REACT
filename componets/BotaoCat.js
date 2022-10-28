import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextComponent,TouchableOpacity,} from 'react-native';


//const BotCat = ({navigation}) => {
    export default function BotCat({navigation}){
    return (
    

  <View style={estilo.container}>

     <View style={estilo.direito}>
      <Button
         title='CONFIRMAR'
         color='green'
         //onPress={() => Alert.alert('AVANÇAR!')}
         onPress={() => navigation.navigate('Pagamento')}
         />
        
        </View>
         
        

     <View style={estilo.esquerdo}>

      <Button
         color='red'
         title ="CANCELAR"
         onPress={() => Alert.alert('VOLTOU!')}
         
       
        />
        </View>

      </View>
    


    
                 

    )
 }

const estilo = StyleSheet.create({

direito : {

    
   
},

 esquerdo : {
  paddingRight:190,
  
  
 },

 container : {
 justifyContent:'center',
 marginHorizontal:16,
 flexDirection:'row-reverse',
 marginTop:'145%',
 },

 
 

}); 


//export default BotCat;

