/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from 'react-native-splash-screen';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import LoginProvider from './src/context/LoginProvider';
const App = (props) => {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Set a splash timer to hide the splash screen after 2000 milliseconds (adjust as needed)
    const splashTimer = setTimeout(async () => {
      if (isConnected) {
        SplashScreen.hide();
      }
      else {
        Alert.alert('No Internet Connection', 'Please check your internet connection and try again.');

      }
    }, 2000);


    // Cleanup when component unmounts
    return () => {
      unsubscribe();
      clearTimeout(splashTimer); // Clear the splash timer
    };
  });

  return (
    <LoginProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </LoginProvider>

  );
};

export default App;
