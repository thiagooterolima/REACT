import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button} from 'react-native';
import BotCat from '../../componets/BotaoCat';
import Vendedor from '../../componets/vendedor';

const Categoria =() => {
    return(

        <SafeAreaView style={styles.container}>
            <Vendedor></Vendedor>
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
  