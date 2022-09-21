import React from "react";
import { StyleSheet, Text, View } from "react-native";

function CustomTextPare({ TitleTextPare }) {
    return (
        <View>
            <Text style={Styles.textpare}>{TitleTextPare}</Text>
        </View>
    );
}

export default CustomTextPare;

const Styles = StyleSheet.create({
    textpare: {
        color: '#FAB0A4',
        fontSize: 16,
        marginVertical: 10,
        fontWeight: 'bold'

    }

})
