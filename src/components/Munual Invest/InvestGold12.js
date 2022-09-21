import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, StyleSheet } from 'react-native';
import Color1 from '../PinchImage/Color1.png';
import goldbars from '../PinchImage/goldbars.png';
import CustomTextPare from '../common/CustomTextPare';
import CustomButton from '../common/CustomButton';
import CustomButton2 from '../common/CustomButton2';
import BtnButton from '../common/BtnButton';


export default function InvestGold12({ navigation }) {

    return (
        <View style={{ backgroundColor: 'black', height: 900 }}>
            <View style={{ height: 55, justifyContent: 'center', marginVertical: 30, }}>

                <TouchableOpacity onPress={() => navigation.navigate("InvestGold1")}>

                    <Image source={Color1} style={{ height: 15, width: 10, left: 10, marginVertical: -20, marginTop: 5, marginHorizontal: 10, }} />
                    <Text style={{ marginHorizontal: 45, fontSize: 18, color: '#EB5757', fontWeight: 'bold', }}>Invest in Gold</Text>

                </TouchableOpacity>

            </View>
            <View style={{ borderWidth: 1, height: 137, borderRadius: 5, width: 324, left: 18, borderColor: '#EB5757' }}>
                <Image source={goldbars} style={{ left: 85, marginVertical: 30 }} />
            </View>
            <View style={{ borderRadius: 5, width: 324, height: 64, marginVertical: 25, left: 20, backgroundColor: '#56423D' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 20 }}>

                    <View style={{ marginVertical: 5 }}>
                        <Text style={{ fontSize: 18, color: '#EB5757', fontWeight: 'bold' }}>Price</Text>
                        <CustomTextPare TitleTextPare="₹ 5,109/gm" />
                    </View>
                    <View style={{ marginVertical: 10 }}>
                        <CustomTextPare TitleTextPare=" + 3%GST" />
                    </View>
                </View>


            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18, marginVertical: -20, }}>
                <CustomButton2 Title="in Amount" />
                <CustomButton Title="in Grams" />

            </View>
            <View>
                <TextInput
                    style={Styles.input}
                    placeholder="Enter Weight"
                    placeholderTextColor="#FAB0A4"
                    keyboardType='numeric'
                />
            </View>
            <View style={{ left: 18, width: 322 }}>
                <CustomTextPare TitleTextPare="By Clicking invest now your aggreing the terms and conditions of Pinch" />
            </View>
            <View style={{ left: 15 }}>
                <BtnButton Title="Invest" onPress={() => navigation.navigate("InvestGold123")} />
            </View>
        </View>
    )
};


const Styles = StyleSheet.create({

    input: {
        height: 54,
        borderWidth: 1,
        fontSize: 16,
        backgroundColor: '#56423D',
        paddingHorizontal: 15,
        color: 'white',
        marginBottom: 70,
        width: 324,
        left: 17,
        borderRadius: 5,
    },
})
