import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Alert,} from 'react-native';
import Vendedor from '../../componets/vendedor';



     export default function Categoria ({navigation}){

    return(

        <SafeAreaView style={styles.container}>
           <Vendedor></Vendedor>

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
    container: {
        justifyContent:'center',
        alignItems:'center',
      
    },

    botao : {
        justifyContent:'center',
        marginHorizontal:16,
        flexDirection:'row-reverse',
        marginTop:'165%',
    },

    esquerdo : {
        paddingRight:190,
    },     
        
    direit0 : {

    }
  });

  



  