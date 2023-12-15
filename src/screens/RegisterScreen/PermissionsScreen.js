/* eslint-disable prettier/prettier */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Alert,
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

import Title, { Info } from '../../components/Text.js';
import { AcceptBtn } from '../../components/Button.js';
import { ContactAccessPermission, FileStoragePermission, LocationAccessPermission } from '../../utils/Permissions';


const PermissionsScreen = (props) => {
    const { userData } = props.route.params;

    const handleGrantPermission = async () => {
        const contactAccessGranted = await ContactAccessPermission();
        const locationAccessGranted = await LocationAccessPermission();
        const fileStorageAccessGranted = await FileStoragePermission();

        if (
            contactAccessGranted &&
            locationAccessGranted &&
            fileStorageAccessGranted
        ) {
            props.navigation.navigate('ContactsScreen', { userData: userData });
        } else {
            Alert.alert(
                '  We need your permission to access certain features of the app. \n Please grant the necessary permissions to continue'
            );
        }
    };

    return (
        <ImageBackground
            source={require('../../../assets/images/background.png')}
            style={styles.img}>
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <View style={styles.loginInfoView}>
                        <Title content="TERMS & CONDITIONS" />
                        <Text style={styles.space}>{''}</Text>
                        <Info content="We need you to allow for following for providing best experience to you" />
                    </View>
                    <View style={styles.permissionList}>
                        <Text style={styles.listItem}>
                            {'\u2022'} We need to access your storage for sharing helmet data
                            to your app.
                        </Text>
                        <Text style={styles.listItem}>
                            {'\u2022'} We need to access your contacts for emergency SOS.
                        </Text>
                        <Text style={styles.listItem}>
                            {'\u2022'} We need to access your location for sharing location to
                            contacts.
                        </Text>
                    </View>
                    <View style={styles.loginButtonView}>
                        <AcceptBtn btnLabel="Allow" Press={handleGrantPermission} />
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
        width: responsiveWidth(91.5), // Responsive width
        paddingTop: responsiveHeight(3),
        alignItems: 'flex-start',
        paddingLeft: responsiveWidth(2.5), // Responsive padding
        borderRadius: 20,
        height: responsiveHeight(67), // Responsive height
        marginTop: responsiveHeight(8),
    },
    loginInfoView: {
        paddingLeft: responsiveWidth(2.5),
        marginBottom: responsiveHeight(2.5),

    },
    loginButtonView: {
        width: responsiveWidth(80), // Responsive width
        alignItems: 'center',
        borderRadius: 20,
        marginTop: responsiveHeight(1.2),
        marginBottom: responsiveHeight(2.3),
    },
    permissionList: {
        paddingHorizontal: responsiveWidth(3),
    },
    listItem: {
        color: 'grey',
        fontSize: responsiveFontSize(2),
        lineHeight: responsiveHeight(4),
        marginBottom: responsiveHeight(3),
        fontFamily: 'Montserrat-Light',

    },
    space: {
        marginVertical: responsiveHeight(0.3),
    },
});

export default PermissionsScreen;
