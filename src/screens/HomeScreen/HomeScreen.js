/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ImageBackground,
} from 'react-native';

import { LineChart, PieChart } from 'react-native-chart-kit';
import styles from './HomeStyles';

import Btn from '../../components/Button';
import { sendSMSApi } from '../../services/ApiService.js'
import { getUserDataFromSecureStorage } from '../../utils/localStorageData';

// import data sets
import speedDataset from '../../utils/speedDataset';
import distanceDataset from '../../utils/distanceDataset';
import { requestPermission, discoverDevices, enableBluetooth, pairWithDevice, connectDevice } from '../../utils/Bluetooth.js';

const screenWidth = Dimensions.get('window').width - 30;

// const Item = ({ item }) => (
//     <View>
//         <Text>{item.title}</Text>
//         <Text>{item.day}</Text>
//     </View>
// );

// const routesList = [
//     { id: 1, title: 'Islamabad to Wah', day: 'Friday' },
//     { id: 2, title: 'Lahore to Islamabad', day: 'Wednesday' },
//     { id: 3, title: 'Karachi to Multan', day: 'Tuesday' },
// ];

const chartConfig = {
    backgroundColor: '#a2a2db',
    backgroundGradientFrom: '#4B3CA7',
    backgroundGradientTo: '#8577AA',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
        borderRadius: 16,
    },
    propsForDots: {
        r: '6',
        strokeWidth: '2',
        stroke: '#4b3ca7',
    },
};

const HomeScreen = (props) => {
    // const { userData } = props.route.params;
    // useEffect(() => {
    //   initializeBluetooth();
    //   return cleanupBluetooth;
    // }, []);

    const [data, setData] = useState({});
    console.log(data, 'data in home component');
    useEffect(() => {
        console.log('Effect ran!');
        // async function fetchToken() {
        //     const response = await getUserDataFromSecureStorage();
        //     setData(response);
        // }
        // fetchToken();
    }, []);

    const handleBluetoothClick = async () => {
        console.log('btn');
        // const enable = await enableBluetooth();
        // if (enable) {
        //     const permissions = await requestPermission();
        //     if (permissions) {

        //         const discover = await discoverDevices();
        //         console.log(discover);
        //         if (!discover) {
        //             const pair = await pairWithDevice(discover.address);
        //             console.log(pair);

        //         }
        //         const connect = await connectDevice(discover.address);
        //         console.log(connect, 'connect');
        //     }
        // }
    };



    const handleSendSMS = async () => {
        console.log('btn clicked');
        // const userData = {
        //     email: data.email,
        //     token: data.token,
        //     location: {
        //         lat: 40.714224,
        //         lon: -73.961452
        //     }
        // }
        // const response = await sendSMSApi(userData);

    };
    return (
        <>
            {/* // <ImageBackground
        //     source={require('../../../assets/images/back.png')}
        //     style={{ width: '100%', height: '100%' }}
        // > */}
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: 40,
                    alignItems: 'center',
                    paddingHorizontal: 40,
                }}
            >
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('UserProfileScreen')}
                >
                    <Text>User</Text>
                </TouchableOpacity>
            </View>

            {/* Graph Section  */}
            <Text style={styles.sectionTitle}>Motorcycle Riding Activity</Text>
            <ScrollView
                horizontal={true}
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 15,
                    paddingVertical: 10, // Adjust the value to change the spacing
                    height: 250,
                }}
            >
                <LineChart
                    data={distanceDataset}
                    width={screenWidth}
                    height={200}
                    chartConfig={chartConfig}
                    yAxisSuffix=' km'
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
                <PieChart
                    data={speedDataset}
                    width={screenWidth}
                    height={200}
                    chartConfig={chartConfig}
                    accessor={'population'}
                    paddingLeft={'15'}
                />
            </ScrollView>
            <Btn title="Submit" btnLabel="Send SMS" Press={handleSendSMS} />

            {/* Features Section */}
            <View style={[styles.section, styles.featureSection]}>
                <Text style={styles.sectionTitle}>Features</Text>
                <View style={styles.featureContainer}>

                    <TouchableOpacity style={[styles.feature, { elevation: 5 }]} onPress={handleBluetoothClick}>
                        {/* <FontAwesome name='bluetooth' size={24} color='#ffffff' /> */}
                        <Text style={styles.featureText}>Bluetooth</Text>
                    </TouchableOpacity>

                </View>
            </View>
            {/* </ImageBackground> */}
        </>
    );
};

export default HomeScreen;

