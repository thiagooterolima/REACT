import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Button,Alert,} from 'react-native';
import Vendedor from '../../componets/vendedor';


export default function Dados ({navigation}){
    return(
       
        <SafeAreaView>
          <Vendedor/>

         <View style={estilos.botao}>
            <View style={estilos.direito}>
            <Button
                 title='CONFIRMAR'
                 color='green'
                 onPress={() => Alert.alert('Pedido Confirmado')}
                 
                 />
            </View>     

            <View style={estilos.esquerdo}>
            <Button
                color='red'
                title ="VOLTAR"
                onPress={() => navigation.navigate('Pagamento')}
                />
            </View>         

        </View>
        </SafeAreaView>
    );
}



const estilos = StyleSheet.create ({
    bar: {
     height: 50,
     position: 'absolute',
     backgroundColor: 'blue',
    },    

    botao:{
      justifyContent:'center',
      marginHorizontal:16,
      flexDirection:'row-reverse',
      marginTop:'85%',
    },
    direito: {

    },
    
    esquerdo:{
        paddingRight:190,
    }

    
    
})