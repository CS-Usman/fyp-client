/* eslint-disable prettier/prettier */

import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ImageBackground,
} from 'react-native';

import styles from './LoginStyles.js'; //

import { Formik } from 'formik';

import Btn, { GoogleBtn } from '../../components/Button';
import Field from '../../components/TextInput';
import Title, { Subtitle, Info } from '../../components/Text.js';

import LoginValidationSchema from '../../utils/FromValidation.js';
import { loginApi } from '../../services/AuthApiService.js';
import { storeUserDataToSecureStorage } from '../../utils/localStorageData.js';

const LoginScreen = (props) => {
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values) => {
        // const responseFromServer = await loginApi(values);
        // const responseFromLocalStorage = await storeUserDataToSecureStorage(
        //     responseFromServer
        // );
        // const data = { ...responseFromServer };
        // console.log(data);
        // if (responseFromServer && responseFromLocalStorage) {
        props.navigation.navigate('HomeScreen');
        // } else {
        //     return 'Error occurs during user login';
        // }
    };

    return (
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={styles.img}
            >
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <Title content="LOGIN" />
                    </View>


                </View>
                {/* <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <Title content="LOGIN" />
                        <Info content="Get Started" />

                        <Formik
                            initialValues={initialValues}
                            validationSchema={LoginValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                                <>
                                    <Field
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        placeholder="Enter email"
                                    />
                                    {errors.email && (
                                        <Text style={styles.errorText}>{errors.email}</Text>
                                    )}

                                    <Field
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder="Password"
                                        secureTextEntry
                                    />
                                    {errors.password && (
                                        <Text style={styles.errorText}>{errors.password}</Text>
                                    )}
                                    <TouchableOpacity style={styles.forgotPassword} onPress={() => props.navigation.navigate('ForgotPasswordScreen')}>
                                        <Text style={styles.forgotPasswordText}>
                                            Forgot Password ?
                                        </Text>
                                    </TouchableOpacity>
                                    <Btn title="Submit" btnLabel="Login" Press={handleSubmit} />
                                </>
                            )}
                        </Formik>
                        <GoogleBtn
                            btnLabel="Login with "
                            Press={() => alert('Logged In as Google')}
                        />
                        <View style={styles.signupContainer}>
                            <Subtitle content="Don't have an account ?" />
                            <TouchableOpacity
                                onPress={() => props.navigation.navigate('RegisterScreen')}
                            >
                                <Text style={[styles.signupText, styles.signupLink]}>
                                    Signup
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View> */}
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
