import React from "react";
import { StyleSheet, Text, View } from "react-native";

function InvestGold123Text({ TitleText, style }) {
    return (
        <View style={style}>
            <Text style={Styles.textcontainer}>{TitleText}</Text>
        </View>
    );
}

export default InvestGold123Text;

const Styles = StyleSheet.create({
    textcontainer: {
        fontSize: 18,
        color: '#EB5757',
        fontWeight: "bold",
        marginVertical: 9,
    }

});