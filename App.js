/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import AppTabs from './src/navigation/AppNavigator';
import Navigator from './src/navigation/AppNavigator';
const App = () => {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Set a splash timer to hide the splash screen after 2000 milliseconds (adjust as needed)
    const splashTimer = setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    // Cleanup when component unmounts
    return () => {
      unsubscribe();
      clearTimeout(splashTimer); // Clear the splash timer
    };
  }, []);

  const isAuthenticated = false; // Change this based on your authentication logic

  return ( 
    <Navigator/>
    
  );
};

export default App;
