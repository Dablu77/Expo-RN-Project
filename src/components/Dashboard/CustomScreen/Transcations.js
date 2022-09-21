import React from 'react'
import { View, } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Roundups from './TranscationsBox/Roundups';
import Sip from './TranscationsBox/Sip';
import Goldinvest from './TranscationsBox/Goldinvest';
import CustomText from '../../common/CustomText';


const Tab = createMaterialTopTabNavigator();

export default function Transcations() {
    return (
        <>
            <View style={{ backgroundColor: '#0D0D0D', paddingTop: 70, paddingHorizontal: 20, paddingBottom: 40, }}>
                <CustomText TitleText="Transcations" />
            </View>
            <Tab.Navigator screenOptions={{
                tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold', },
                tabBarStyle: { backgroundColor: 'black', },
                tabBarActiveTintColor: "#EB5757",
                tabBarIndicatorStyle: {
                    borderBottomColor: "#FAB0A4",
                    borderBottomWidth: 2,
                }

            }}>
                <Tab.Screen name="Round-UPS" component={Roundups} />
                <Tab.Screen name="Sip" component={Sip} />
                <Tab.Screen name="Gold Invest" component={Goldinvest} />
            </Tab.Navigator>
        </>
    )
}