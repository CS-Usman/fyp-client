/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    KeyboardAvoidingView,
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';

import { Formik } from 'formik';

import Btn from '../../components/Button';
import Field from '../../components/TextInput';
import Title, { Info } from '../../components/Text.js';

import { PasswordValidationSchema } from '../../utils/FromValidation';
import { changePasswordApi } from '../../services/ApiService.js';
import { CommonActions } from '@react-navigation/native';


const EditPasswordScreen = (props) => {
    const [passwordError, setPasswordError] = useState(false);
    const { token } = props.route.params;

    const initialValues = {
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = async (values) => {
        if (values.password !== values.confirmPassword) {
            setPasswordError(true);

        } else {
            setPasswordError(false);
            const data = { ...token, ...values };
            const response = await changePasswordApi(data);
            if (response.success) {
                props.navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'LoginScreen' }],
                    })
                );
            }
        }
    };

    return (
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={styles.img}>
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <View style={styles.loginInfoView}>
                            <Title content="EDIT PASSWORD" />
                            <Info content="Enter your new password" />
                        </View>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={PasswordValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                                <>
                                    <Field
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder="Password"
                                        secureTextEntry
                                        placeholderTextColor="#a9a9a9"

                                    />
                                    {errors.password && (
                                        <Text style={styles.errorText}>{errors.password}</Text>
                                    )}
                                    <Field
                                        onChangeText={handleChange('confirmPassword')}
                                        onBlur={handleBlur('confirmPassword')}
                                        value={values.confirmPassword}
                                        placeholder="Confirm Password"
                                        secureTextEntry
                                        placeholderTextColor="#a9a9a9"

                                    />
                                    {passwordError && (
                                        <Text style={styles.errorText}>Password did not match</Text>
                                    )}
                                    <Text style={styles.space}>{''}</Text>
                                    <View style={styles.loginButtonView}>
                                        <Btn
                                            title="Submit"
                                            btnLabel="SAVE"
                                            Press={handleSubmit}
                                        />
                                    </View>

                                </>
                            )}
                        </Formik>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    img: {
        height: '100%',
        width: '100%',
    },
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginContainer: {
        backgroundColor: '#1B1B1B',
        opacity: 0.95,
        width: responsiveWidth(90), // Responsive width
        paddingTop: responsiveHeight(3),
        alignItems: 'flex-start',
        paddingLeft: responsiveWidth(2.5), // Responsive padding
        borderRadius: 20,
        height: responsiveHeight(52), // Responsive height
    },
    loginInfoView: {
        paddingLeft: responsiveWidth(2.5),
        marginBottom: responsiveHeight(1.5),
    },

    errorText: {
        color: 'red',
        paddingLeft: responsiveWidth(5),
    },
    loginButtonView: {
        width: responsiveWidth(80), // Responsive width
        alignItems: 'center',
        borderRadius: 20,
        marginTop: responsiveHeight(2.3),
        marginBottom: responsiveHeight(2.3),
    },
});

export default EditPasswordScreen;
