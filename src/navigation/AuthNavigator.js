/* eslint-disable prettier/prettier */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// main screens
import LoginScreen from '../screens/LoginScreen/LoginScreen';

// register screen

import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import PasswordScreen from '../screens/RegisterScreen/PasswordScreen';
import PermissionsScreen from '../screens/RegisterScreen/PermissionsScreen';
import ContactsScreen from '../screens/RegisterScreen/ContactsScreen';
import ConfirmationScreen from '../screens/RegisterScreen/ConfirmationScreen';
import EmailConfirmationScreen from '../screens/RegisterScreen/EmailCofirmationScreen';

// forgot Password

import ForgotPasswordScreen from '../screens/ForgotPassword/ForgotPasswordScreen';
import VerifyOtpScreen from '../screens/ForgotPassword/VerifyOtpScreen';
import ResetPasswordScreen from '../screens/ForgotPassword/ResetPasswordScreen';


const Stack = createNativeStackNavigator();


const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PasswordScreen"
                component={PasswordScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="PermissionsScreen"
                component={PermissionsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ContactsScreen"
                component={ContactsScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ConfirmationScreen"
                component={ConfirmationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EmailConfirmationScreen"
                component={EmailConfirmationScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ForgotPasswordScreen"
                component={ForgotPasswordScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="VerifyOtpScreen"
                component={VerifyOtpScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ResetPasswordScreen"
                component={ResetPasswordScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};



export default AuthNavigator;
