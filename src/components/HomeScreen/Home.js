import React from "react";
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ScrollView } from "react-native";
import CustomTextPare from "../common/CustomTextPare";
import CustomText from "../common/CustomText";
import CustomButton from "../common/CustomButton";
import CustomTextPare2 from "../common/CustomTextPare2";



function Home({ navigation }) {
    return (
        <ScrollView style={Styles.appContainer}>

            <View style={Styles.homeContainer}>

                <View style={Styles.containerlogo}>
                    <Text style={Styles.logoText}>PINCH</Text>
                </View>
                <CustomText TitleText=" Hello," style={{ marginTop: 100 }} />
                <CustomTextPare TitleTextPare="Welcome to the Pinch, Start your Invest-ing now" />


                <TextInput
                    style={Styles.input}
                    placeholder="Enter Phone no."
                    placeholderTextColor="#FAB0A4"
                    keyboardType='numeric'
                />

                <CustomTextPare2 TitleTextPare2="Proceeding implies my acceptance of  " />
                <View style={Styles.row}>
                    <TouchableOpacity>
                        <Text style={Styles.underlineTextStyle}>Terms and Conditions </Text>
                    </TouchableOpacity>
                    <Text style={{ color: '#FAB0A4', fontWeight: 'bold', marginTop: 3, }} > & </Text>
                    <TouchableOpacity  >
                        <Text style={Styles.underlineTextStyle}> Privacy Policies</Text>
                    </TouchableOpacity>

                </View>


                <CustomButton Title="Next" onPress={() => navigation.navigate("Verification")} />


            </View>
        </ScrollView>
    );
}

export default Home;

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