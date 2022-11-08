import React from 'react';
import { StyleSheet, Text, View,SafeAreaView} from 'react-native';
import SelectList from 'react-native-dropdown-select-list'

const Drop = () => { 

const [selected, setSelected] = React.useState("");

const cliente = [
    {key:'1',value:'Carlos'},
    {key:'2',value:'João'},
    {key:'3',value:'Pedro'},
    {key:'4',value:'Marcos'},
];


const cat = [
    {key:'1',value:'Grão'},
    {key:'2',value:'Agro Toxicos'},
    {key:'3',value:'Sementes'},
   
];

const produto = [
    {key:'1',value:'Milho'},
    {key:'2',value:'Arroz'},
    {key:'3',value:'Inseticida'},
   
];




return(
             <View style={estilos.container}> 

              <View style={estilos.cli}>
                <SelectList data={cliente} setSelected={setSelected}placeholder="Selecione o Cliente"/>
              </View>

              <View style={estilos.cat}>
                <SelectList data={cat} setSelected={setSelected}placeholder="Selecione a Categoria"/>
              </View>

              <View> 
                <SelectList data={produto} setSelected={setSelected}placeholder="Selecione o Produto"/>
              </View> 

             </View>
)
}

const estilos = StyleSheet.create ({
 container : {

   paddingVertical:20,
   paddingHorizontal:10,
   justifyContent:'center',
   alignContent:'center',
   justifyContent:'space-between',
   flexDirection:'column', 
   


 },

 cli :{
    marginBottom:20
 },

 cat : {
    marginBottom:20,
 }



})


export default Drop;