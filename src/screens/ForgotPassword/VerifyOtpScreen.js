/* eslint-disable prettier/prettier */
import React from 'react';
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
import { OtpValidationSchema } from '../../utils/FromValidation';

const VerifyOtpScreen = (props) => {
    const { userData } = props.route.params;
    const initialValues = {
        otp: '',
    };

    const handleSubmit = (values) => {
        if (userData.otp === values.otp) {
            props.navigation.navigate('ResetPasswordScreen', { userData: { token: userData.resetToken, email: userData.email } });
        }
    };

    return (
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={styles.img}>
                <View style={styles.container}>
                    <View style={styles.registerContainer}>
                        <View style={styles.loginInfoView}>
                            <Title content="VERIFY OTP" />
                            <Info content="Enter otp you received in mail" />
                        </View>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={OtpValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                                <>
                                    <Field
                                        onChangeText={handleChange('otp')}
                                        onBlur={handleBlur('otp')}
                                        value={values.otp}
                                        placeholder="Enter OTP"
                                        placeholderTextColor="#a9a9a9"
                                    />
                                    {errors.otp && (
                                        <Text style={styles.errorText}>{errors.otp}</Text>
                                    )}
                                    <View style={styles.loginButtonView}>
                                        <Btn title="Submit" btnLabel="VERIFY OTP" Press={handleSubmit} />
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
    registerContainer: {
        backgroundColor: '#1B1B1B',
        opacity: 0.95,
        width: responsiveWidth(90), // Responsive width
        paddingTop: responsiveHeight(3),
        alignItems: 'flex-start',
        paddingLeft: responsiveWidth(2.5), // Responsive padding
        borderRadius: 20,
        height: responsiveHeight(50), // Responsive height
    },
    loginInfoView: {
        paddingLeft: responsiveWidth(2.5),
        marginBottom: responsiveHeight(4),
    },
    space: {
        marginVertical: responsiveHeight(0.5),
    },
    errorText: {
        color: 'red',
        paddingLeft: responsiveWidth(5),
    },
    loginButtonView: {
        marginTop: responsiveHeight(8),
        width: responsiveWidth(80), // Responsive width
        alignItems: 'center',
        borderRadius: 20,
    },
});

export default VerifyOtpScreen;
