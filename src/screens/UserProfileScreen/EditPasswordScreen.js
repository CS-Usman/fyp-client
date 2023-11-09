/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
import { PasswordValidationSchema } from '../../utils/FromValidation';
import { changePasswordApi } from '../../services/ApiService.js';
import { CommonActions } from '@react-navigation/native';


const { width, height } = Dimensions.get('window');


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
            {/* <ImageBackground
                source={require('../../../assets/images/back2.png')}
                style={{ height: '100%', width: '100%' }}
            > */}
            <View style={styles.container}>
                <Text style={styles.title}>Change Password</Text>
                <View style={styles.registerContainer}>
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
                                />
                                {passwordError && (
                                    <Text style={styles.errorText}>Password did not match</Text>
                                )}
                                <Text style={styles.space}>{''}</Text>
                                <Btn
                                    title="Submit"
                                    btnLabel="Save"
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

export default EditPasswordScreen;
