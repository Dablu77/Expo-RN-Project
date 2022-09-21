import React from "react";
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomHome from '../Dashboard/CustomScreen/CustomHome';
import Transcations from "./CustomScreen/Transcations";
import Portfolio from "./CustomScreen/Portfolio";
import Account from "./CustomScreen/Account";
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/AntDesign';


const Tab = createBottomTabNavigator();

function CustomDashboard({ }) {
    return (


        <Tab.Navigator
            screenOptions={({
                headerShown: false,
                tabBarStyle: { backgroundColor: '#56423D', color: '#FAB0A4' }
            })}>
            <Tab.Screen name="Home" component={CustomHome} />
            <Tab.Screen name="Transcations" component={Transcations} />
            <Tab.Screen name="Portfolio" component={Portfolio} />
            <Tab.Screen name="Account" component={Account} />

        </Tab.Navigator>






    );
}

export default CustomDashboard;



