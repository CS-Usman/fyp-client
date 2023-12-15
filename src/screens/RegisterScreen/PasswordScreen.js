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

import Title, { Info } from '../../components/Text.js';
import Btn from '../../components/Button';
import Field from '../../components/TextInput';
import { PasswordValidationSchema } from '../../utils/FromValidation.js';

const PasswordScreen = (props) => {
    const { userData } = props.route.params;
    const [passwordError, setPasswordError] = useState(false);

    const initialValues = {
        password: '',
        confirmPassword: '',
    };

    const handleSubmit = async (values) => {
        if (values.password !== values.confirmPassword) {
            setPasswordError(true);
        }
        const data = { ...userData, ...values };
        props.navigation.navigate('PermissionsScreen', { userData: data });
    };
    return (
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={styles.img}>
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <View style={styles.loginInfoView}>
                            <Title content="SET UP PASSWORD" />
                            <Info content="Password length should be more than 8 characters" />
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
                                        placeholder="Rewrite Password"
                                        placeholderTextColor="#a9a9a9"
                                        secureTextEntry
                                    />
                                    {passwordError && (
                                        <Text style={styles.errorText}>Password did not match</Text>
                                    )}
                                    <Text style={styles.space}>{''}</Text>
                                    <View style={styles.loginButtonView}>

                                        <Btn
                                            title="Submit"
                                            btnLabel="NEXT"
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
        width: responsiveWidth(91.5), // Responsive width
        paddingTop: responsiveHeight(3),
        alignItems: 'flex-start',
        paddingLeft: responsiveWidth(2.5), // Responsive padding
        borderRadius: 20,
        height: responsiveHeight(52), // Responsive height
        // marginTop: responsiveHeight(10),
    },
    loginInfoView: {
        paddingLeft: responsiveWidth(2.5),
        marginBottom: responsiveHeight(1.5),
        width: '96%',
    },
    errorText: {
        color: 'red',
        paddingLeft: responsiveWidth(5),
    },
    space: {
        marginVertical: responsiveHeight(0.5),
    },
    loginButtonView: {
        width: responsiveWidth(80), // Responsive width
        alignItems: 'center',
        borderRadius: 20,
        marginTop: responsiveHeight(1.2),
        marginBottom: responsiveHeight(2.3),
    },
});

export default PasswordScreen;
