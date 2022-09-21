import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomButton from '../../common/CustomButton';
import CustomText from '../../common/CustomText';
import CustomTextPare from '../../common/CustomTextPare';
import ImageCard from '../../PinchImage/Frame1912.png';
import BtnButton from '../../common/BtnButton';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageCard12 from '../../PinchImage/MoneyBag.png';
import ImageCard123 from '../../PinchImage/Account.png';
import Notification from '../../PinchImage/Notification.png';
import GoldPot from '../../PinchImage/GoldPot.png';
import InvestmentPortfolio from '../../PinchImage/InvestmentPortfolio.png';
import Gwoman from '../../PinchImage/Gwoman.png';

function CustomHome({ navigation }) {
    return (

        <View style={Styles.currentText}>
            <View style={{ marginHorizontal: 18, }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Image source={ImageCard} style={{ marginVertical: 50, height: 50, width: 50 }}></Image>
                    <View style={{ flexDirection: 'row', }}>

                        <Text style={{ color: 'white', marginVertical: 60, marginHorizontal: -10, fontSize: 19, color: '#FAB0A4' }}> Hey User</Text>
                        <Image source={ImageCard123} style={{ marginVertical: 55, marginHorizontal: 18, height: 30, width: 30 }}></Image>
                    </View>

                </View>

                <ScrollView style={{ marginBottom: 5 }}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                        <View>

                            <CustomText TitleText="Current Gold Price" />
                            <CustomTextPare TitleTextPare=" 49,570.00 | 10g of 24k gold (99.9%) " />
                        </View>
                        <View>
                            <Image source={Notification} style={{ height: 23, width: 23 }} />
                        </View>

                    </View>


                    <View style={{ backgroundColor: '#56423D', paddingVertical: 13, height: 72, width: 328, borderRadius: 5, alignSelf: 'center', marginVertical: 10, flexDirection: 'row', justifyContent: 'space-around' }}>
                        <CustomTextPare TitleTextPare=" Gold you own " />
                        <CustomTextPare TitleTextPare="  0.248 gms " />
                    </View>


                    <View style={{ height: 300, borderColor: "#EB5757", borderWidth: 1, borderRadius: 5, justifyContent: 'center' }}>
                        <View style={{ color: 'white' }}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 60, marginHorizontal: 17, }}>

                                <Image source={ImageCard12} style={{ height: 54, width: 54 }} />
                                <View>
                                    <CustomText TitleText="Recent Roundup" />
                                    <CustomTextPare TitleTextPare=" on 1 Feb 2022, 9:20 AM " />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>

                                <View>
                                    <CustomText TitleText="Recent Transcation:" style={{ width: 150, }} />
                                    <CustomTextPare TitleTextPare="₹ 101.23" />
                                </View>
                                <View>

                                    <CustomText TitleText="Round up Amount:" style={{ width: 150 }} />
                                    <CustomTextPare TitleTextPare="₹ 9" />
                                </View>

                            </View>
                            <View style={{ marginHorizontal: 15, marginVertical: -10 }}>

                                <CustomButton Title="Configure" onPress={() => navigation.navigate("ConfigureSIP")} />
                            </View>

                        </View>

                    </View>

                    <BtnButton Title="Autopay" />


                    <View style={{ height: 250, borderColor: "#EB5757", borderWidth: 1, borderRadius: 5, justifyContent: 'center' }}>
                        <View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 18, }}>

                                <Image source={GoldPot} style={{ height: 72, width: 72 }} />
                                <View style={{ width: 192 }}>
                                    <CustomText TitleText="Manual Invest" />
                                    <CustomTextPare TitleTextPare="Invest in Digital Gold with as low as Rs. 1." />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                                <View style={{ marginHorizontal: 18 }}>
                                    <CustomButton Title="Invest Now" onPress={() => navigation.navigate("InvestGold1")} />

                                </View>
                                <View style={{ width: 192 }}>

                                    <CustomText TitleText="Recent Investment of:" style={{ width: 130 }} />
                                    <CustomTextPare TitleTextPare="₹ 101.23" />
                                </View>

                            </View>


                        </View>

                    </View>

                    <View style={{ height: 250, borderColor: "#EB5757", marginVertical: 20, borderWidth: 1, borderRadius: 5, justifyContent: 'center' }}>
                        <View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginHorizontal: 18, }}>

                                <Image source={InvestmentPortfolio} style={{ height: 63, width: 63 }} />
                                <View style={{ width: 192 }}>
                                    <CustomText TitleText="Set-up your SIP" />
                                    <CustomTextPare TitleTextPare="Let's make the future shine. with monthly SIP in Gold at just Rs.500." />
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                                <View style={{ marginHorizontal: 18 }}>
                                    <CustomButton Title="Configure" />

                                </View>
                                <View style={{ width: 192 }}>

                                    <CustomText TitleText="Current SIP Amount:" style={{ width: 129 }} />
                                    <CustomTextPare TitleTextPare="₹ 500.00 / month" />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#EB5757', borderRadius: 5, height: 130, marginVertical: 15 }}>
                        <View style={{ marginTop: 30, marginHorizontal: 15 }}>
                            <CustomText TitleText="Coming up with..." />
                            <TouchableOpacity>
                                <CustomTextPare TitleTextPare="Click Here to Know" />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image source={Gwoman} style={{ height: 110, width: 109, marginTop: 15, }} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: '#EB5757', borderRadius: 5, marginTop: 15, marginBottom: 160 }}>
                        <View style={{ marginTop: 20, marginHorizontal: 18 }}>
                            <CustomText TitleText="How Pinch works?" />
                            <TouchableOpacity>
                                <CustomTextPare TitleTextPare="Click Here" />
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>



    );
}

export default CustomHome;


const Styles = StyleSheet.create({

    dashboardContainer: {

        backgroundColor: "black",
    },
    CustomDashboard1: {

    },
    currentText: {
        flex: 1,
        backgroundColor: 'black',


    },


}
)