/* eslint-disable prettier/prettier */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// main screens
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SOSConfirmationScreen from '../screens/HomeScreen/SOSConfirmationScreen';
import UserProfileScreen from '../screens/UserProfileScreen/UserProfileScreen';
import EditCredentialsScreen from '../screens/UserProfileScreen/EditCredentialsScreen';
import EditPasswordScreen from '../screens/UserProfileScreen/EditPasswordScreen';
import UserContactScreen from '../screens/UserProfileScreen/UserContactScreen';
import EditContactScreen from '../screens/UserProfileScreen/EditContactScreen';
import LogoutConfirmationScreen from '../screens/UserProfileScreen/LogoutConfirmationScreen';
import DeleteAccountConfirmationScreen from '../screens/UserProfileScreen/DeleteAccountConfirmationScreen';
import { useLogin } from '../context/LoginProvider';
import AuthNavigator from './AuthNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SOSConfirmationScreen"
        component={SOSConfirmationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LogoutConfirmationScreen"
        component={LogoutConfirmationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeleteAccountConfirmationScreen"
        component={DeleteAccountConfirmationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditCredentialsScreen"
        component={EditCredentialsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditPasswordScreen"
        component={EditPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserContactScreen"
        component={UserContactScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditContactScreen"
        component={EditContactScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>

  );
};


const AppNavigator = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <Navigator /> : <AuthNavigator />;
};
export default AppNavigator;
