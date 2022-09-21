import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import CustomPicker from '../../../common/CustomPicker';
import SortAlphaUp from '../../../PinchImage/SortAlphaUp.png'
import CustomTranscationsBox from './CustomTranscationsBox';



export default function Sip() {
    return (

        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <View style={{ flexDirection: 'row', marginVertical: 30, marginHorizontal: 20, justifyContent: 'space-between' }}>
                <CustomPicker />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, color: '#FAB0A4', fontWeight: 'bold', marginVertical: 10, right: 3 }}>Sort by Date</Text>
                    <Image source={SortAlphaUp} style={{ marginVertical: 12 }} />

                </View>

            </View>
            <ScrollView>
                <CustomTranscationsBox />
                <CustomTranscationsBox />
                <CustomTranscationsBox />
                <CustomTranscationsBox />
                <CustomTranscationsBox />
                <CustomTranscationsBox />
            </ScrollView>
        </View>
    )
}