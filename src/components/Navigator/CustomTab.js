// import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import React from 'react';
// import TabImage from '../PinchImage/Frame1912.png';

// export default function CustomTab({ navigation }) {
//     return (
//         <View style={styles.viewContainer} >
//             <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('CustomHome')}>
//                 <Image source={TabImage} style={{ height: 20, width: 20, }} />
//                 <Text >Home</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Portfolio')}>
//                 <Image source={TabImage} style={{ height: 20, width: 20, }} />
//                 <Text >Portfolio</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Account')}>
//                 <Image source={TabImage} style={{ height: 20, width: 20, }} />
//                 <Text >Account</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.btnView} onPress={() => navigation.navigate('Transcations')}>
//                 <Image source={TabImage} style={{ height: 20, width: 20, }} />
//                 <Text >Transcations</Text>
//             </TouchableOpacity>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     viewContainer: {
//         backgroundColor: 'grey',
//         marginHorizontal: 20,
//         justifyContent: 'flex-end',
//         height: 50,
//         marginVertical: 10,
//         borderRadius: 5,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         zIndex: 100,
//     },
//     btnView: {
//         flexDirection: 'column',
//         justifyContent: 'center',

//     }
// })