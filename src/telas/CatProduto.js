import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Alert,} from 'react-native';
import  SelectList  from 'react-native-dropdown-select-list';
import Vendedor from '../../componets/vendedor';
import Drop from '../../componets/Drop';



     export default function Categoria ({navigation}){
     return(

        
        <SafeAreaView> 
          
               <Vendedor></Vendedor>
           
                <Drop></Drop>
    
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
    botao : {
        justifyContent:'center',
        marginHorizontal:16,
        flexDirection:'row-reverse',
        marginTop:'82%',
        
    },

    esquerdo : {
        paddingRight:190,
    },     
        
    direit0 : {

    }
  });

  



  