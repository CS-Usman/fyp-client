import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
// forgot Password
import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import VerifyOtpScreen from '../screens/ForgotPassword/VerifyOtpScreen';
import ResetPasswordScreen from '../screens/ForgotPassword/ResetPasswordScreen';
import UserProfileScreen from '../screens/UserProfileScreen/UserProfileScreen';
// import EditCredentialsScreen from '../screens/UserProfileScreen/EditCredentialsScreen';
// import EditPasswordScreen from '../screens/UserProfileScreen/EditPasswordScreen';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="UserProfileScreen"
          component={UserProfileScreen}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VerifyOtpScreen"
          component={VerifyOtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{headerShown: false}}
        />

        
        {/* <Stack.Screen
                    name="EditCredentialsScreen"
                    component={EditCredentialsScreen}
                    options={{ headerShown: false }}
                /> */}
        {/* <Stack.Screen
                    name="EditPasswordScreen"
                    component={EditPasswordScreen}
                    options={{ headerShown: false }}
                /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
