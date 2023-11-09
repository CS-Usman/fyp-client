/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Navigator from './src/navigation/AppNavigator';


const App = () => {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    console.log(isConnected);
    // Cleanup when component unmounts
    return () => {
      unsubscribe();
    };
  },);

  return <Navigator />;
};

export default App;
