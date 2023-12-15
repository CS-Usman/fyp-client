/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
} from 'react-native';
import Btn from '../../components/Button';

import {
    responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, responsiveFontSize, responsiveHeight,
} from 'react-native-responsive-dimensions';

import ProfileBg from '../../components/profilebg.js';
import LinearGradient from 'react-native-linear-gradient';
import { sendSMS } from '../../utils/sendSMS.js';
import { signupApi } from '../../services/AuthApiService.js';


const ConfirmationScreen = (props) => {
    const { userData, emergencyContacts } = props.route.params;
    const [contacts, setContacts] = useState([]);
    const [data, setData] = useState({});

    useEffect(() => {
        const formattedContacts = emergencyContacts.map((contact) => {
            const displayName = contact.displayName;
            const rawContactId = contact.rawContactId;
            const phoneNumbers = contact.phoneNumbers[0].number;
            return { displayName, phoneNumbers, rawContactId };
        });

        const uniqueContacts = formattedContacts.filter((contact, index, self) => {
            const isDuplicate = self.findIndex((c) => c.rawContactId === contact.rawContactId) === index;
            return !isDuplicate;
        });
        setContacts(uniqueContacts);
        setData({ ...userData, emergencyContacts: uniqueContacts });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async () => {
        await sendSMS(contacts);
        const responseFromServer = await signupApi(data);
        if (responseFromServer) {
            props.navigation.navigate('EmailConfirmationScreen', {
                userData: data,
            });
        }

    };

    const renderItem = ({ item }) => (
        <View style={[styles.section, styles.featureSection]}>

            <View style={{ flex: 4 }}>
                <Text style={styles.featureText}>{item.displayName}
                </Text>
                <Text style={{ alignItems: 'center', color: 'white', fontSize: responsiveFontSize(1.5), fontFamily: 'Montserrat-Medium' }}>
                    {item.phoneNumbers}
                </Text>
            </View>
        </View>
    );

    return (
        <LinearGradient
            colors={['#3dc6b9', '#4df8e8']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ProfileBg name={data.name} email={data.email} number={data.userPhoneNumber} />
            </ScrollView>
            <View style={styles.innercontainer}>

                <Text style={styles.heading}>Selected Contacts</Text>
                <FlatList
                    data={contacts}
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.rawContactId}-${item.displayName}`}
                />
            </View>
            <View style={styles.loginButtonView}>
                <Btn title="Submit" btnLabel="VERIFY" Press={handleSubmit} />
            </View>

        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#1B1B1B',
        opacity: 0.95,
    },
    innercontainer: {
        paddingLeft: responsiveWidth(5),
        backgroundColor: '#1B1B1B',
        height: responsiveScreenHeight(30),
    },
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 30,
        flex: 1,
        justifyContent: 'center',
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        elevation: 5,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: responsiveScreenWidth(7),
        marginTop: 20,
        alignItems: 'center',
    },
    profileEmail: {
        fontSize: 16,
        color: '#ffffff',
    },
    section: {
        width: '100%',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    statisticsSection: {
        backgroundColor: 'gray',
        elevation: 5,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: responsiveScreenWidth(2),
        marginVertical: 10,
        alignItems: 'center',
    },
    featureText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    featureSection: {
        backgroundColor: 'black',
        elevation: 1,
        borderRadius: 25,
        height: responsiveScreenHeight(9),
        width: responsiveScreenWidth(90),
        flex: 1,
        flexDirection: 'row',
    },
    loginButtonView: {
        backgroundColor: '#1B1B1B',
        width: responsiveScreenWidth(100),
        paddingVertical: responsiveHeight(3),
        alignItems: 'center',
    },
});

export default ConfirmationScreen;
