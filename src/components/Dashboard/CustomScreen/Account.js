import * as React from 'react';
import { Pressable, View, Text } from 'react-native';



function Account({ navigation }) {
    return (

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Pressable
                onPress={() => navigation.navigate('Account')}
                style={{ backgroundColor: 'plum', padding: 10, marginBottom: 10, marginTop: 10 }}
            >
                <Text>Account</Text>
            </Pressable>

        </View>
    );
}

export default Account;