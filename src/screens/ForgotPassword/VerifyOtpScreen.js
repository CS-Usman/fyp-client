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
import { OtpValidationSchema } from '../../utils/FromValidation';

const { width } = Dimensions.get('window');

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
            {/* <ImageBackground
                source={require('../../../assets/images/back2.png')}
                style={{ height: '100%', width: '100%' }}
            > */}
            <View style={styles.container}>
                <Text style={styles.title}>Verify OTP</Text>
                <View style={styles.registerContainer}>
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
                                />
                                {errors.otp && (
                                    <Text style={styles.errorText}>{errors.otp}</Text>
                                )}

                                <Btn title="Submit" btnLabel="Verify OTP" Press={handleSubmit} />


                            </>
                        )}
                    </Formik>
                </View>
            </View>
            {/* </ImageBackground> */}
        </KeyboardAvoidingView>
    );
};

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

export default VerifyOtpScreen;
