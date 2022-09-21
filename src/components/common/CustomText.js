
import React from "react";
import { StyleSheet, Text, View } from "react-native";

function CustomText({ TitleText, style }) {
    return (
        <View style={style}>
            <Text style={Styles.textcontainer}>{TitleText}</Text>
        </View>
    );
}

export default CustomText;

const Styles = StyleSheet.create({
    textcontainer: {
        fontSize: 28,
        color: '#EB5757',
        fontWeight: "bold",
    }

});