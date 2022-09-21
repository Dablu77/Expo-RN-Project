import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function RoundupsBox() {
    return (
        <ScrollView>

            <View style={Styles.CustomTranscations}>
                <Text style={Styles.TranscationsText}>05 Jan 2021 12:00 pm</Text>

                <View style={Styles.ContainerTranscations}>
                    <View>
                        <Text style={Styles.TranscationsText1}>You Spend </Text>
                        <Text style={Styles.TranscationsText2}>₹ 4.00</Text>
                    </View>
                    <View>
                        <Text style={Styles.TranscationsText1}> Round - up</Text>
                        <Text style={Styles.TranscationsText2}>₹ 3,446.00</Text>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const Styles = StyleSheet.create({

    CustomTranscations: {
        backgroundColor: '#0D0D0D',
        paddingVertical: 13,
        paddingHorizontal: 10,
        height: 110,
        width: 324,
        borderRadius: 5,
        alignSelf: 'center',
        marginVertical: 10,
        // flexDirection: 'row',
        borderColor: '#EB5757',
        borderWidth: 1,



    },
    TranscationsText: {
        color: '#56423D',
    },


    TranscationsText1: {
        color: '#EB5757',
        fontSize: 18,
        width: 125,
        fontWeight: "bold",


    },
    TranscationsText2: {
        color: '#FAB0A4',
        fontSize: 16,
        width: 125,
        fontWeight: "bold",




    },
    ContainerTranscations: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    }


})