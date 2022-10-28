import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextComponent,TouchableOpacity,} from 'react-native';


const BotCat = () => {
    
    return (
    

  <View style={estilo.container}>

     <View style={estilo.direito}>
      <Button
         title='CONFIRMAR'
         color='green'
         onPress={() => Alert.alert('AVANÇAR!')}
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
 marginTop:'160%',
 },

 
 

}); 


export default BotCat;

