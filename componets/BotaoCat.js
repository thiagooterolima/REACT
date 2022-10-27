import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, TextComponent,TouchableOpacity,} from 'react-native';


const BotCat = () => {
    
    return (
    

  <View style={estilo.container}>

     <View style={estilo.direito}>
      <Button
         title='Avançar'
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

    backgroundColor:'black'
   
},

 esquerdo : {
  color: 'blue',
  marginRight: 190,
  paddingRight:190,
  borderBottomColor:'green',
  borderColor:'green',
  color:'green',
  title:'Voltar'
  

 },

 container : {
 justifyContent:'center',
 marginHorizontal:16,
 flexDirection:'row-reverse',
 marginTop:'160%',
 },

 
 posiçao:{
    position:'absolute',
    color:'green'
 },

}); 


export default BotaoCat;

