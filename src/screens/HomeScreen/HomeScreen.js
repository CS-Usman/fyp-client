/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomSheet from 'react-native-simple-bottom-sheet';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faBluetooth} from '@fortawesome/free-brands-svg-icons'; // Use free-brands-svg-icons for brand icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the Icon component
import Profilebuttons from '../../components/profilebuttons.js';
library.add(faBluetooth);

import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {LineChart, PieChart, BarChart} from 'react-native-chart-kit';
import styles from './HomeStyles';

import Btn from '../../components/Button';
import {sendSMSApi} from '../../services/ApiService.js';
import {getUserDataFromSecureStorage} from '../../utils/localStorageData';

// import data sets
import speedDataset from '../../utils/speedDataset';
import distanceDataset from '../../utils/distanceDataset';
import {
  requestPermission,
  discoverDevices,
  enableBluetooth,
  pairWithDevice,
  connectDevice,
} from '../../utils/Bluetooth.js';

import {
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const screenWidth = Dimensions.get('window').width - 42;
const Tab = createBottomTabNavigator();

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
  backgroundGradientFrom: 'black',
  backgroundGradientTo: 'black',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => '#4df8e8',
  labelColor: (opacity = 1) => '#ffff',
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#3dc6b9',
  },
};

const HomeScreen = props => {
  // const { userData } = props.route.params;
  // useEffect(() => {
  //   initializeBluetooth();
  //   return cleanupBluetooth;
  // }, []);

  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);
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
    <ImageBackground
      source={require('../../../assets/images/app-home-background.png')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.sosContainer}>
        <TouchableOpacity
        // onPress={props.navigation.navigate('UserProfileScreen')}
        >
          <Image source={require('../../../assets/icons/profile.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.nameTitle}>ADIL</Text>
        <TouchableOpacity
        // onPress={handleSendSMS}
        >
          <Image
            style={styles.sosimg}
            source={require('../../../assets/icons/sos.png')}></Image>
        </TouchableOpacity>
      </View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          paddingHorizontal: 40,
        }}>
        <TouchableOpacity
        // onPress={() => props.navigation.navigate('UserProfileScreen')}
        >
          <Text>User</Text>
        </TouchableOpacity>
      </View>

      {/* Graph Section  */}

      <BottomSheet
        isOpen={false}
        sliderMaxHeight={700}
        sliderMinHeight={275}
        wrapperStyle={{backgroundColor: '#1B1B1B', opacity: 0.95, blur: 1}} // Customize the wrapper style
      >
        <View>
          <ScrollView vertical={true}>
            <View style={styles.container}>
            <Profilebuttons
              icon="bluetooth"
              // Press={handleBluetoothClick}
              text={toggle ? 'Bluetooth Connected' : 'Bluetooth Not Connected'}
              color={toggle ? '#3dc6b9' : 'red'}
              textsmall="Tap here to connect Bluetooth"
            />
            <Profilebuttons
              icon="map-marker-distance"
              // Press={handleBluetoothClick}
              text="Distance"
              color="#3dc6b9"
              textsmall="Distance covered in last 7 rides."
            />

            <Text style={styles.sectionTitle}>Motorcycle Riding Activity</Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 10, // Adjust the value to change the spacing
                height: 250,
              }}>
              <LineChart
                data={distanceDataset}
                width={screenWidth}
                height={200}
                chartConfig={chartConfig}
                yAxisSuffix=" km"
                bezier
                style={{
                  borderRadius: 16,
                }}
              />
              <View style={{margin: 20}} />
              <View>
                <Text style={styles.piechartText}>Pie chart</Text>
                <PieChart
                  data={speedDataset}
                  width={screenWidth}
                  height={250}
                  chartConfig={chartConfig}
                  accessor={'population'}
                  paddingLeft={'15'}
                  style={{
                    borderRadius: 16,
                  }}
                />
              </View>
            </ScrollView>
            <View style={{margin: 20}} />
           
            </View>
          </ScrollView>
        </View>
      </BottomSheet>
    </ImageBackground>
  );
};

export default HomeScreen;
