import React from "react";
import { StyleSheet, Text, View } from "react-native";

function CustomTextPare2({ TitleTextPare2 }) {
    return (
        <View styles={Styles.pare2}>
            <Text style={Styles.TitleTextPare2}>{TitleTextPare2}</Text>
        </View>
    );
}

export default CustomTextPare2;

const Styles = StyleSheet.create({
    TitleTextPare2: {
        color: '#FAB0A4',
        fontSize: 18,
        fontWeight: 'bold',



    },


})
