import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function CustomButton({ Title, onPress, style }) {
    return (
        <>

            <LinearGradient colors={['#FE573D', '#FAB0A4']} start={[0.1, 0.1]} end={[1, 1,]} style={[Styles.button]}>
                <TouchableOpacity onPress={onPress} style={style} >
                    <Text style={Styles.buttonText}>{Title}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </>
    );
}

export default CustomButton;

const Styles = StyleSheet.create({
    button: {
        width: 146,
        backgroundColor: "#FE573D",
        borderRadius: 5,
        height: 45,
        marginVertical: 50,



    },
    buttonText: {
        color: '#0D0D0D',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
        fontStyle: 'normal',
        lineHeight: 19,
        textAlign: 'center',


    }
});
