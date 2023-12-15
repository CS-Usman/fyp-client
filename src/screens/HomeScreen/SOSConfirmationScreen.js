/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, ImageBackground, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
} from 'react-native-responsive-dimensions';
import Title, { Info } from '../../components/Text.js';
import { sendSMSApi } from '../../services/ApiService.js';
import Btn from '../../components/Button';

const SOSConfirmationScreen = (props) => {
    const { userData } = props.route.params;
    const navigation = useNavigation();

    const handleCancel = async () => {
        navigation.goBack();

    };
    const handleSubmit = async () => {
        const success = await sendSMSApi(userData);
        if (success) {
            ToastAndroid.showWithGravityAndOffset(
                'SMS sent to emergency contacts',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        }
        else {
            ToastAndroid.showWithGravityAndOffset(
                'Not able to send SMS',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
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
                            <Title content="EMERGENCY SOS" />
                            <Info content="Do you want to send an emergency sms to your emergency contacts" />
                        </View>
                        <View style={styles.loginButtonView}>
                            <Btn title="Submit" btnLabel="Yes" Press={handleSubmit} />
                            <Btn title="Submit" btnLabel="No" Press={handleCancel} />
                        </View>

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
        height: responsiveHeight(47), // Responsive height
    },
    loginInfoView: {
        paddingLeft: responsiveWidth(2.5),
        marginBottom: responsiveHeight(1),
    },
    loginButtonView: {
        width: responsiveWidth(80), // Responsive width
        alignItems: 'center',
        borderRadius: 20,
        display: 'flex',
        flex: 1,
        justifyContent: 'space-evenly',
        paddingVertical: responsiveHeight(4),
    },
});

export default SOSConfirmationScreen;
