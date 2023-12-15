/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import Title, { Info } from '../../components/Text.js';
import Field from '../../components/TextInput';

import Btn from '../../components/Button';
import { updateUserApi } from '../../services/ApiService.js';
import { SignUpValidationSchema } from '../../utils/FromValidation';

const EditCredentialsScreen = (props) => {
    const { userData, token } = props.route.params;
    const navigation = useNavigation();

    const initialValues = {
        name: userData.name,
        email: userData.email,
        userPhoneNumber: userData.userPhoneNumber.toString(),
    };

    const handleSubmit = async (values) => {
        userData.name = values.name;
        userData.userPhoneNumber = values.userPhoneNumber;
        const response = await updateUserApi(userData, token);
        if (response) {
            navigation.goBack();
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
                            <Title content="EDIT PROFILE" />
                            <Info content="Edit your name" />
                        </View>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={SignUpValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                                <View>
                                    <Field
                                        style={styles.input}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        placeholderTextColor="#a9a9a9"

                                    />
                                    {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}

                                    <View style={styles.loginInfoView}>
                                        <Info content="Edit email" />
                                    </View>


                                    <Field
                                        style={styles.input}
                                        value={values.email}
                                        placeholderTextColor="#a9a9a9"
                                    />
                                    <View style={styles.loginInfoView}>

                                        <Info content="Edit your phone number" />
                                    </View>

                                    <Field
                                        style={styles.input}
                                        onChangeText={handleChange('userPhoneNumber')}
                                        onBlur={handleBlur('userPhoneNumber')}
                                        value={values.userPhoneNumber}
                                        keyboardType="numeric"
                                        placeholderTextColor="#a9a9a9"

                                    />
                                    {errors.userPhoneNumber && <Text style={styles.errorText}>{errors.userPhoneNumber}</Text>}
                                    <View style={styles.loginButtonView}>
                                        <Btn title="Submit" btnLabel="Save" Press={handleSubmit} />
                                    </View>
                                </View>
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
        // marginTop: responsiveHeight(),
    },
    loginContainer: {
        backgroundColor: '#1B1B1B',
        opacity: 0.95,
        width: responsiveWidth(90), // Responsive width
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
    uneditable: {
        backgroundColor: '#f0f0f0',
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

export default EditCredentialsScreen;
