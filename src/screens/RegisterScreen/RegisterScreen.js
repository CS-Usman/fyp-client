/* eslint-disable prettier/prettier */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
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
import { SignUpValidationSchema } from '../../utils/FromValidation.js';

const RegisterScreen = (props) => {
    const initialValues = {
        name: '',
        email: '',
        userPhoneNumber: '',
    };

    const handleSubmit = async (values) => {

        props.navigation.navigate('PasswordScreen', { userData: values });
    };
    return (
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={styles.img}>
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <View style={styles.loginInfoView}>
                            <Title content="Create a new account" />
                            <Info content="Join with other riders" />
                        </View>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignUpValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                                <>
                                    <Field
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        placeholder="Enter your name"
                                        placeholderTextColor="#a9a9a9"

                                    />
                                    {errors.name && (
                                        <Text style={styles.errorText}>{errors.name}</Text>
                                    )}
                                    <Field
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        placeholder="Enter your email"
                                        placeholderTextColor="#a9a9a9"

                                    />
                                    {errors.email && (
                                        <Text style={styles.errorText}>{errors.email}</Text>
                                    )}

                                    <Field
                                        onChangeText={handleChange('userPhoneNumber')}
                                        onBlur={handleBlur('userPhoneNumber')}
                                        value={values.userPhoneNumber}
                                        placeholder="Enter your phone number"
                                        keyboardType="phone-pad"
                                        placeholderTextColor="#a9a9a9"

                                    />
                                    {errors.userPhoneNumber && (
                                        <Text style={styles.errorText}>{errors.userPhoneNumber}</Text>
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
        height: responsiveHeight(57), // Responsive height
    },
    loginInfoView: {
        paddingLeft: responsiveWidth(2.5),
        marginBottom: responsiveHeight(1),
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

export default RegisterScreen;
