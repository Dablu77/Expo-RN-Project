import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function ConfigureText({ ConfigureText }) {
    return (
        <View>
            <Text style={Style.Configurestyle}>{ConfigureText}</Text>

        </View>
    )
};
export default ConfigureText;


const Style = StyleSheet.create({
    Configurestyle: {
        width: 121,
        height: 40,
        color: '#EB5757',
        fontSize: 18,
        fontWeight: "400",
        fontWeight: 'bold',




    }

})