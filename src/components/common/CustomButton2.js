import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


function CustomButton2({ Title, onPress, }) {
    return (
        <>


            <View onPress={onPress} style={Styles.button} >
                <TouchableOpacity>
                    <Text style={Styles.buttonText}>{Title}</Text>
                </TouchableOpacity>
            </View>

        </>
    );
}

export default CustomButton2;

const Styles = StyleSheet.create({
    button: {
        width: 146,
        borderRadius: 5,
        height: 45,
        marginVertical: 50,
        borderWidth: 1,
        borderColor: '#EB5757',




    },
    buttonText: {
        color: '#EB5757',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 15,
        fontStyle: 'normal',
        lineHeight: 19,
        textAlign: 'center',


    }
});
