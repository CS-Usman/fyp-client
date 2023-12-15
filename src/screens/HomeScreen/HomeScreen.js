/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import BottomSheet from 'react-native-simple-bottom-sheet';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBluetooth } from '@fortawesome/free-brands-svg-icons'; // Use free-brands-svg-icons for brand icons
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
  ToastAndroid
} from 'react-native';

import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import { LineChart, BarChart } from 'react-native-chart-kit';
import styles from './HomeStyles';
import { sendSMSApi, getUserApi, setDataset, getArduinoServerData } from '../../services/ApiService.js';
import { getUserDataFromSecureStorage } from '../../utils/localStorageData.js';

// import data sets
import speedDataset from '../../utils/speedDataset';
import distanceDataset from '../../utils/distanceDataset';
import { convertTimeFormat } from '../../utils/convertTimeFormat.js';

const screenWidth = Dimensions.get('window').width - 40;

const chartConfig = {
  backgroundGradientFrom: 'black',
  backgroundGradientTo: 'black',
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => '#4df8e8',
  labelColor: (opacity = 1) => '#ffff',
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '4',
    strokeWidth: '1',
    stroke: '#3dc6b9',
  },
};

const HomeScreen = props => {

  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(false);
  const [token, setToken] = useState({});
  useEffect(() => {

    async function fetchToken() {
      const response = await getUserDataFromSecureStorage();
      setToken(response);
      const result = await getUserApi(response);
      setData(result);
    }
    fetchToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Call the function every 30 seconds if connected
    if (toggle) {
      const intervalId = setInterval(async () => {
        const accessToken = token.token;
        const message = await getArduinoServerData();
        if (message) {
          const accident = message.data.find(
            (item) => item.value1 === "1" && isRecentAccident(item.reading_time)
          );
          console.log(accident);
          if (accident) {
            const userData = {
              email: data.email,
              token: token.token,
              location: {
                lat: accident.value3,
                lon: accident.value2,
              },
            };
            await sendSMSApi(userData);
          }
          else {
            const recentData = message.data[0];
            await setDataset({ token: accessToken, email: data.email, latitude: recentData.value2, longitude: recentData.value3, distance: recentData.Distance, speed: recentData.Speed });
          }

        }
      }, 30000);
      return () => clearInterval(intervalId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggle]);
  function isRecentAccident(accidentTime) {
    const currentDateTime = new Date();
    const accidentDateTime = new Date(accidentTime);
    const timeDifferenceInMinutes = Math.abs((currentDateTime - accidentDateTime) / (1000));
    return timeDifferenceInMinutes <= 120000;
  }

  function changeTime(gmtTime) {
    const londonDate = new Date(gmtTime);
    const pakTimeString = londonDate.toLocaleString('en-GB', {
      timeZone: 'Asia/Karachi',
    });
    return pakTimeString;

  }

  function isRecentConnection(accidentTime) {
    const currentDateTime = new Date();
    const accidentDateTime = new Date(accidentTime);
    const timeDifferenceInMilliseconds = Math.abs((currentDateTime - accidentDateTime) / 1000);
    return timeDifferenceInMilliseconds <= 10000;
  }

  const handleConnectClick = async () => {
    if (toggle) {
      ToastAndroid.showWithGravityAndOffset(
        'Disconnecting helmet',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      setToggle((prevState) => !prevState);
    }
    else {
      ToastAndroid.showWithGravityAndOffset(
        'Connecting helmet',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      const response = await getArduinoServerData();
      if (response) {

        const recentTime = response.data[0].reading_time;
        const convertTime = convertTimeFormat(recentTime);
        const getTime = isRecentConnection(convertTime);
        if (getTime) {
          setToggle((prevState) => !prevState);
        }
        if (!getTime) {
          ToastAndroid.showWithGravityAndOffset(
            'Helmet not powered on',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        }
      }
      else {
        ToastAndroid.showWithGravityAndOffset(
          'Helmet not powered on',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      }
    }
  };

  const handleSendSMS = async () => {
    if (toggle) {
      ToastAndroid.showWithGravityAndOffset(
        'Calculating current location',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      const response = await getArduinoServerData();
      const recentData = response.data[0];
      const userData = {
        email: data.email,
        token: token.token,
        location: {
          lat: recentData.value3,
          lon: recentData.value2,
        },
      };
      props.navigation.navigate('SOSConfirmationScreen', { userData: userData });
      // console.log(userData);
      // const success = await sendSMSApi(userData);
    }
    if (!toggle) {
      ToastAndroid.showWithGravityAndOffset(
        'Helmet not powered on',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };
  return (
    <ImageBackground
      source={require('../../../assets/images/app-home-background.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{ width: '100%', height: '100%' }}>
      <View style={styles.sosContainer}>
        <TouchableOpacity
          onPress={() => { props.navigation.navigate('UserProfileScreen', { data: data, token: token }); }}
        >
          <Image style={styles.profileimg} source={require('../../../assets/icons/profile.png')} />
        </TouchableOpacity>
        <Text style={styles.nameTitle}>{data?.name?.split(' ')[0].toUpperCase()}</Text>
        <TouchableOpacity
          onPress={handleSendSMS}
        >
          <Image
            style={styles.sosimg}
            source={require('../../../assets/icons/sos.png')} />
        </TouchableOpacity>
      </View>

      {/* Graph Section  */}

      <BottomSheet
        isOpen={false}
        sliderMaxHeight={700}
        sliderMinHeight={275}
        // eslint-disable-next-line react-native/no-inline-styles
        wrapperStyle={{ backgroundColor: '#1B1B1B', opacity: 0.95, blur: 1 }} // Customize the wrapper style
      >
        <View>
          <ScrollView vertical={true}>
            <View style={styles.container}>
              <Profilebuttons
                icon={toggle ? 'wifi' : 'wifi-off'}
                Press={handleConnectClick}
                text={toggle ? 'Hemlet Connected' : 'Helmet Not Connected'}
                color={toggle ? '#3dc6b9' : 'red'}
                textsmall="Tap here to connect Helmet"
              />
              <View style={[styles.section, styles.featureSection]}>
                <View style={{ flex: 1 }}>
                  <Icon
                    name="map-marker-distance"
                    size={25}
                    color="#3dc6b9"
                    style={{ marginRight: responsiveWidth(5) }}
                  />
                </View>
                <View style={{ flex: 4 }}>
                  <TouchableOpacity >
                    <Text style={styles.featureText}>Total Distance
                    </Text>
                    <Text style={{ alignItems: 'center', color: 'white', fontSize: responsiveFontSize(1.5), fontFamily: 'Montserrat-Medium', }}>
                      Distance covered from start
                    </Text>
                  </TouchableOpacity>
                </View>
                <View >
                  <TouchableOpacity>
                    <Text style={{ marginRight: responsiveWidth(3), color: '#4df8e8', fontSize: responsiveFontSize(2.5), fontFamily: 'Montserrat-Bold' }}>

                      {data.travelHistory && data.travelHistory.length > 0
                        ? data.travelHistory.reduce((sum, obj) => sum + obj.distanceTraveledInWeek, 0)
                        : 0
                      }
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.sectionTitle}>Motorcycle Riding Activity</Text>
              <ScrollView
                horizontal={true}
                // eslint-disable-next-line react-native/no-inline-styles
                contentContainerStyle={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingVertical: 10, // Adjust the value to change the spacing
                  height: 250,
                }}>
                <LineChart
                  data={distanceDataset}
                  width={screenWidth}
                  height={210}
                  chartConfig={chartConfig}
                  yAxisSuffix=" km"
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    borderRadius: 16,
                  }}
                />
                <View style={{ margin: 20 }} />
                <View>
                  <Text style={styles.graphLegend}>Average Speed per week</Text>
                  <BarChart
                    data={speedDataset}
                    width={screenWidth}
                    height={215}
                    yAxisSuffix=" km/hr"
                    chartConfig={chartConfig}
                    showValuesOnTopOfBars
                    fromZero
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      borderRadius: 16,
                    }}

                  />
                </View>
              </ScrollView>
              <View style={{ margin: 20 }} />
            </View>
          </ScrollView>
        </View>
      </BottomSheet>
    </ImageBackground>
  );
};

export default HomeScreen;
