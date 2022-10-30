import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Categoria from './src/telas/CatProduto';
import Pagamento from './src/telas/TelaPagamento';
import Dados from './src/telas/ListagemDados';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categoria">
        <Stack.Screen name="Categoria Produto" component={Categoria}/>
        <Stack.Screen name="Pagamento"  component={Pagamento}/>  
        <Stack.Screen name="Confirmar Dados"  component={Dados}/>         
      </Stack.Navigator>
    </NavigationContainer>
  
  );
}

