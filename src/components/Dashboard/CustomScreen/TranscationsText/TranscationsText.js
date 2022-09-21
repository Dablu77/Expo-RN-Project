import React from "react";
import { StyleSheet, Text, View } from "react-native";

function TranscationsText({ TranscationsText }) {
    return (
        <View>
            <Text style={Styles.Transcationscontainer}>{TranscationsText}</Text>
        </View>
    );
}

export default TranscationsText;

const Styles = StyleSheet.create({
    Transcationscontainer: {
        fontSize: 20,
        color: '#EB5757',
        fontWeight: "bold",


    }

});