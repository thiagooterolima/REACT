import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import SelectList from 'react-native-dropdown-select-list'

const Drop1 = () => {

    const [selected, setSelected] = React.useState("");

    const formaPagamento = [
        {key:'1',value:'Dinheiro'},
        {key:'2',value:'Débito'},
        {key:'3',value:'Crédito'},
        {key:'4',value:'Pix'},
    ];

    return(
        <SafeAreaView style={estilos.container}>
            <View style={estilos.pagamentos}>
                <SelectList data={formaPagamento} setSelected={setSelected} placeholder="Formas de pagamento"/>
            </View>
        </SafeAreaView>
    )
}

const estilos = StyleSheet.create({
    container : {

        paddingVertical:20,
        paddingHorizontal:10,
        justifyContent:'center',
        alignContent:'center',
        justifyContent:'space-between',
        flexDirection:'column', 
           
     
      }, 

    pagamentos: {
        marginBottom: 20,
    },
});

export default Drop1;