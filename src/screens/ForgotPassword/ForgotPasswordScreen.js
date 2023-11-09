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
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

import { Formik } from 'formik';

import Btn from '../../components/Button';
import Field from '../../components/TextInput';
import { EmailValidationSchema } from '../../utils/FromValidation';
import { forgotPasswordApi } from '../../services/AuthApiService.js';

const { width, height } = Dimensions.get('window');

const ForgotPasswordScreen = (props) => {

    const initialValues = {
        email: '',
    };

    const handleSubmit = async (values) => {
        const response = await forgotPasswordApi(values);
        const data = { ...values, ...response };
        if (response) {
            props.navigation.navigate('VerifyOtpScreen', { userData: data });
        }
    };

    return (
        <KeyboardAvoidingView>
            {/* <ImageBackground
                source={require('../../../assets/images/back2.png')}
                style={{ height: '100%', width: '100%' }}
            > */}
            <View style={styles.container}>
                <Text style={styles.title}>Forgot Password</Text>
                <View style={styles.registerContainer}>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={EmailValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <>
                                <Field
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Email"
                                />
                                {errors.email && (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                )}
                                <Text style={styles.space}>{''}</Text>
                                <Btn
                                    title="Submit"
                                    btnLabel="Next  ->"
                                    Press={handleSubmit}
                                />
                            </>
                        )}
                    </Formik>
                </View>
            </View>
            {/* </ImageBackground> */}
        </KeyboardAvoidingView>
    );
};

// Rest of your styles and export statement...


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: width,
    },
    title: {
        color: 'white',
        fontSize: responsiveFontSize(4.5),
        fontWeight: 'bold',
        marginVertical: responsiveHeight(11),
    },
    registerContainer: {
        backgroundColor: 'white',
        width: responsiveWidth(100),
        borderTopLeftRadius: 0.28 * width,
        paddingTop: responsiveHeight(7),
        alignItems: 'center',
    },
    subtitle: {
        fontSize: responsiveFontSize(3.5),
        color: '#4b3ca7',
        fontWeight: 'bold',
    },
    description: {
        color: 'grey',
        fontSize: responsiveFontSize(2),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(5),
    },
    space: {
        marginVertical: responsiveHeight(0.5),
    },
    errorText: {
        color: 'red',
        fontStyle: 'italic',
    },
});

export default ForgotPasswordScreen;
