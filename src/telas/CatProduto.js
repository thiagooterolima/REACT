import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button} from 'react-native';
import BotCat from '../../componets/BotaoCat';

const Categoria =() => {
    return(

        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>'OLA'</Text>
            <BotCat></BotCat>
            
         </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    text:{
        color:'black',
        
    }
  });


  export default Categoria;
  