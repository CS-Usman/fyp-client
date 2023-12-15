/* eslint-disable prettier/prettier */

import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Title, { Info } from '../../components/Text.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the Icon component

const EmailConfirmationScreen = (props) => {
    const { userData } = props.route.params;
    useEffect(() => {
        const timer = setTimeout(() => {
            props.navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'LoginScreen' }],
                })
            );
        }, 30000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={styles.img}>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={styles.loginInfoView}>
                        <Title content="CONGRATULATIONS !" />
                        <Info content="The Screen disappears after 30 sec" />
                        <View style={styles.iconView}>
                            <Icon
                                name="checkbox-marked-circle-outline"
                                size={30}
                                color="green"
                                style={{ marginTop: responsiveWidth(2) }}
                            />
                        </View>



                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.infoText}>
                            Dear {userData.name}, your account has been created.
                        </Text>
                        <Text style={styles.infoText}>
                            We've sent you an email at {userData.email} for verification.
                        </Text>
                        <Text style={styles.infoText}>
                            Please check your inbox or spam.
                        </Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
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
        height: responsiveHeight(48), // Responsive height
    },
    loginInfoView: {
        paddingLeft: responsiveWidth(2.5),
    },
    iconView: {
        marginTop: responsiveHeight(0.8),
        alignItems: 'center',
    },
    textView: {
        marginTop: responsiveHeight(1),
        paddingHorizontal: responsiveWidth(5), // Responsive width
    },
    infoText: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: responsiveFontSize(2.1),
        color: '#a9a9a9',

    },
});

export default EmailConfirmationScreen;
