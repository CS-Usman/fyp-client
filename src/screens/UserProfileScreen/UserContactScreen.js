/* eslint-disable prettier/prettier */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    FlatList,
    KeyboardAvoidingView,
} from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
    responsiveScreenWidth,
    responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

import Btn from '../../components/Button';
import Title, { Info } from '../../components/Text.js';


const UserContactScreen = (props) => {
    const { userData, token } = props.route.params;
    const handleSubmit = async (values) => {
        props.navigation.navigate('EditContactScreen', { userData: userData, token: token });

    };

    const renderItem = ({ item }) => (
        <View style={[styles.section, styles.featureSection]}>

            <View style={{ flex: 4 }}>
                <Text style={styles.featureText}>{item.displayName}
                </Text>
                <Text style={{ alignItems: 'center', color: 'white', fontSize: responsiveFontSize(1.5), fontFamily: 'Montserrat-Medium', }}>
                    {item.phoneNumbers}
                </Text>
            </View>
        </View>
    );

    return (
        <KeyboardAvoidingView>
            <ImageBackground
                source={require('../../../assets/images/background.png')}
                style={styles.img}>
                <View style={styles.container}>
                    <View style={styles.loginContainer}>
                        <View style={styles.loginInfoView}>
                            <Title content="YOUR CONTACTS" />
                            <Info content="Change your emergency contacts" />
                        </View>
                        <View>
                            <FlatList
                                data={userData.emergencyContacts}
                                renderItem={renderItem}
                                keyExtractor={(item) => `${item.rawContactId}-${item.displayName}`}
                            />
                        </View>
                        <View style={styles.loginButtonView}>
                            <Btn
                                title="Submit"
                                btnLabel="EDIT"
                                Press={handleSubmit}
                            />
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
        height: responsiveHeight(52), // Responsive height
    },
    loginInfoView: {
        paddingLeft: responsiveWidth(2.5),
        marginBottom: responsiveHeight(1.5),
    },
    featureText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    section: {
        width: '100%',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    featureSection: {
        backgroundColor: 'black',
        elevation: 1,
        borderRadius: 25,
        height: responsiveScreenHeight(9),
        width: responsiveScreenWidth(83),
        flex: 1,
        flexDirection: 'row',
    },
    loginButtonView: {
        width: responsiveWidth(80), // Responsive width
        alignItems: 'center',
        borderRadius: 20,
        marginTop: responsiveHeight(2.3),
        marginBottom: responsiveHeight(2.3),
    },
});

export default UserContactScreen;
