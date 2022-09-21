import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Verification from '../HomeScreen/Verification';
import Home from '../HomeScreen/Home';
import CustomDashboard from '../Dashboard/CustomDashboard';
import ConfigureSIP from '../ConfigureSIP/ConfigureSIP';
import InvestGold1 from '../Munual Invest/InvestGold1';
import InvestGold12 from '../Munual Invest/InvestGold12';
import InvestGold123 from '../Munual Invest/InvestGold123';





const Stack = createStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            animationEnabled: false,
        }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="CustomDashboard" component={CustomDashboard} />
            <Stack.Screen name="ConfigureSIP" component={ConfigureSIP} />
            <Stack.Screen name="InvestGold1" component={InvestGold1} />
            <Stack.Screen name="InvestGold12" component={InvestGold12} />
            <Stack.Screen name="InvestGold123" component={InvestGold123} />

        </Stack.Navigator>
    )
}

export default Navigator;