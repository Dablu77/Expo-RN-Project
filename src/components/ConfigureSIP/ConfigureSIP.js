import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BtnButton from '../common/BtnButton';
import CustomButton from '../common/CustomButton';
import ConfigureText from './ConfigureText';
import Color1 from '../PinchImage/Color.png';



function ConfigureSIP({ navigation }) {
    return (

        <View style={Style.contanerSip1}>

            <View style={{ borderWidth: 1, width: 368, height: 55, justifyContent: 'center', backgroundColor: '#56423D', marginVertical: 40 }}>

                <TouchableOpacity onPress={() => navigation.navigate("CustomDashboard")}>

                    <Image source={Color1} style={{ height: 15, width: 10, left: 10, marginVertical: -20, marginTop: 10, marginHorizontal: 10, }} />
                    <Text style={{ marginHorizontal: 45, fontSize: 18, color: '#EB5757', fontWeight: 'bold', }}>Configure SIP</Text>

                </TouchableOpacity>

            </View>
            <Text style={{ color: '#FAB0A4', fontSize: 16, width: 328, height: 150, marginHorizontal: 20, fontWeight: 'bold', }}>Accumulate 24k 999 pure Gold at the best prices in the market each month.</Text>

            <View style={Style.contanerBorder}>
                <Text style={{ textAlign: 'center', color: '#FAB0A4', marginVertical: 10, }}>From: 05 Aug 2021, To: 05 Jan 2022</Text>

                <View style={Style.contanerBorder2}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text style={{ color: '#FAB0A4', fontSize: 18, fontWeight: 'bold', }}>Gold you own</Text>
                        <Text style={{ color: '#EB5757', fontSize: 18, fontWeight: 'bold', }}>0.248 gms</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20 }}>
                    <View>
                        <ConfigureText ConfigureText="Amount Invested:" />
                        <Text style={{ color: '#FAB0A4', fontSize: 18, lineHeight: 20, fontWeight: 'bold', }}>₹ 600 /-</Text>
                    </View>
                    <View>
                        <ConfigureText ConfigureText="Current Value:" />
                        <Text style={{ color: '#FAB0A4', fontSize: 18, lineHeight: 20, fontWeight: 'bold', }}>₹ 900 /-</Text>
                    </View>


                </View>

            </View>

            <View style={Style.contanerBorder3}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: -30 }}>
                    <ConfigureText ConfigureText="Current SIP Amount :" />
                    <Text style={{ color: '#FAB0A4', right: 50, fontSize: 18, marginTop: 22, fontWeight: 'bold', }}> ₹ 100 /-</Text>

                    <CustomButton Title="Change amount" />
                </View>

                <BtnButton Title="Pause SIP" />
            </View>

        </View>

    )
};


export default ConfigureSIP;

const Style = StyleSheet.create({

    contanerSip1: {

        backgroundColor: '#0D0D0D',
        height: 800,
        width: 360,
    },
    contanerBorder: {
        borderWidth: 1,
        borderColor: '#EB5757',
        width: 328,
        height: 209,
        borderRadius: 5,
        marginHorizontal: 16,



    },
    contanerBorder2: {
        width: 295,
        height: 54,
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#56423D',
        marginHorizontal: 18,
        marginTop: 20,
    },
    contanerBorder3: {
        borderWidth: 1,
        borderColor: '#EB5757',
        width: 328,
        height: 83,
        borderRadius: 5,
        marginHorizontal: 16,
        marginTop: 40,
    },
})

