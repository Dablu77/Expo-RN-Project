import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import CustomTextPare from "../common/CustomTextPare";
import CustomText from "../common/CustomText";
import CustomButton from "../common/CustomButton";
import CustomTextPare2 from "../common/CustomTextPare2";


function Verification({ navigation }) {
    return (
        <ScrollView style={Styles.appContainer}>

            <View style={Styles.homeContainer}>

                <View style={Styles.containerlogo}>
                    <Text style={Styles.logoText}>PINCH</Text>
                </View>
                <CustomText TitleText="Phone no. Verification" style={{ marginTop: 100 }} />
                <CustomTextPare TitleTextPare="You will receive OTP on +91 9876543210" />



                <TextInput
                    style={Styles.input}
                    placeholder="Enter OTP."
                    placeholderTextColor="#FAB0A4"
                    keyboardType='numeric'
                />


                <CustomTextPare2 TitleTextPare2="If you Didnt receive OTP in 1:30 then click on Resend  " />

                <CustomButton Title="Verification" onPress={() => navigation.navigate("CustomDashboard")} />
                <View style={Styles.row}>
                    <TouchableOpacity>
                        <Text style={Styles.underlineTextStyle}> Change Phone no.</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
}

export default Verification;

const Styles = StyleSheet.create({

    homeContainer: {
        marginHorizontal: 20,
        // paddingTop: 70,
    },

    input: {
        height: 54,
        borderWidth: 1,
        fontSize: 16,
        backgroundColor: '#56423D',
        paddingHorizontal: 15,
        color: 'white',
        marginTop: 20,
        marginBottom: 70,
    },


    underlineTextStyle: {
        color: 'white',
        borderBottomColor: '#EB5757',
        borderBottomWidth: 1,
        fontSize: 16,
        color: '#EB5757',
        marginVertical: -25,



    },
    row: {
        flexDirection: 'row',

    },
    containerlogo: {
        marginTop: 140,


    },

    logoText: {
        color: '#FE573D',
        textAlign: 'center',
        fontSize: 60,

    },
    appContainer: {
        backgroundColor: 'black',
        flex: 1,

    },

});