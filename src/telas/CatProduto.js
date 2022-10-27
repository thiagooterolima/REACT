import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button} from 'react-native';
import BotCat from '../../componets/BotaoCat';

const Categoria =() => {
    return(

        <SafeAreaView style={styles.container}>
            <Text style = {styles.text} >Vendedor : Ciclando</Text>
           <BotCat></BotCat>
           
            
         </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
      
    },

    text:{
        color:'black',
        marginTop:'20%',
        marginRight:'60%'
        
    }
  });


  export default Categoria;
  