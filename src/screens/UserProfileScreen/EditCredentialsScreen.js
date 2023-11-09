/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

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
        console.log('btn');
        const response = await updateUserApi(userData, token);
        if (response) {
            navigation.goBack();
        }

    };

    return (
        <View style={styles.container}>
            <Formik
                initialValues={initialValues}
                validationSchema={SignUpValidationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                        />
                        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
                        <TextInput
                            style={[styles.input, styles.uneditable]}
                            value={values.email}
                            editable={false}
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('userPhoneNumber')}
                            onBlur={handleBlur('userPhoneNumber')}
                            value={values.userPhoneNumber}
                            keyboardType="numeric"
                        />
                        {errors.userPhoneNumber && <Text style={styles.errorText}>{errors.userPhoneNumber}</Text>}

                        <Btn title="Submit" btnLabel="Save" Press={handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
    },
    uneditable: {
        backgroundColor: '#f0f0f0',
    },
    errorText: {
        color: 'red',
    },
});

export default EditCredentialsScreen;
