import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function BtnButton({ Title, onPress, style }) {
    return (
        <View>

            <LinearGradient colors={['#FE573D', '#FAB0A4']} start={[0.1, 0.1]} end={[1, 1,]} style={[Styles.button]}>
                <TouchableOpacity onPress={onPress} style={style} >
                    <Text style={Styles.buttonText}>{Title}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
}

export default BtnButton;

const Styles = StyleSheet.create({
    button: {
        width: 328,
        backgroundColor: "#FE573D",
        borderRadius: 5,
        height: 45,
        marginVertical: 10,



    },
    buttonText: {
        color: '#0D0D0D',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
        fontStyle: 'normal',
        // fontWeight: '300',
        lineHeight: 19,
        textAlign: 'center',


    }
});
