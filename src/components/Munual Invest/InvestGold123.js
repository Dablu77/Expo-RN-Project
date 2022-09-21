import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Color1 from '../PinchImage/Color1.png';
import goldbars from '../PinchImage/goldbars.png';
import CustomTextPare from '../common/CustomTextPare';
import BtnButton from '../common/BtnButton';
import InvestGold123Text from './InvestGold123Text';



export default function InvestGold123({ navigation }) {

    return (
        <View style={{ backgroundColor: 'black', height: 900 }}>
            <View style={{ height: 55, justifyContent: 'center', marginVertical: 30, }}>

                <TouchableOpacity onPress={() => navigation.navigate("InvestGold12")}>

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
            <View style={{ marginHorizontal: 20, }}>
                <CustomTextPare TitleTextPare="Invoice" />
            </View>
            <View style={{ height: 121, width: 324, borderWidth: 1, borderColor: '#EB5757', borderRadius: 5, marginHorizontal: 20, marginVertical: 40, flexDirection: 'row', justifyContent: 'space-between' }}>

                <View style={{ marginHorizontal: 20, }}>
                    <InvestGold123Text TitleText="GST" />
                    <InvestGold123Text TitleText="Quantity" />
                    <InvestGold123Text TitleText="Total Price" />
                </View>
                <View style={{ marginHorizontal: 20 }}>
                    <CustomTextPare TitleTextPare="0.6%" />
                    <CustomTextPare TitleTextPare="0.0018 gms" />
                    <CustomTextPare TitleTextPare="₹ 100" />
                </View>

            </View>


            <View style={{ left: 15 }}>
                <BtnButton Title="Pay" />
            </View>
        </View>
    )
};


const Styles = StyleSheet.create({


})
