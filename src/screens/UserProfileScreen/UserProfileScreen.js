/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Btn from '../../components/Button';
import { getUserDataFromSecureStorage, deleteDataFromSecureStore } from '../../utils/localStorageData';
import { deleteUserApi, getUserApi } from '../../services/ApiService';
import { logoutApi } from '../../services/AuthApiService.js';
import { CommonActions } from '@react-navigation/native';

const UserProfileScreen = (props) => {
    const [token, setToken] = useState({});
    const [data, setData] = useState({});
    console.log(data);
    useEffect(() => {
        console.log('Effect ran!');
        // async function fetchData() {
        //     const response = await getUserApi(token);
        //     if (response) {
        //         setData(response);
        //     }
        // }

        // async function fetchToken() {
        //     const response = await getUserDataFromSecureStorage();
        //     setToken(response);
        // }

        // if (token) {
        //     console.log(token);
        //     fetchData();
        // } else {
        //     fetchToken();
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = async () => {
        // const response = await deleteUserApi(token);
        // if (response.success) {
        //   props.navigation.dispatch(
        //     CommonActions.reset({
        //       index: 0,
        //       routes: [{ name: 'LoginScreen' }],
        //     })
        //   );
        // }
    };


    const handleLogout = async () => {
        // await deleteDataFromSecureStore();
        // const responseFromServer = await logoutApi(token);
        // console.log(responseFromServer.success);
        // if (responseFromServer.success) {
        //   props.navigation.dispatch(
        //     CommonActions.reset({
        //       index: 0,
        //       routes: [{ name: 'LoginScreen' }],
        //     })
        //   );
        // }

    };
    const handleEdit = () => {
        console.log('edit');
        if (data) {
            props.navigation.navigate('EditCredentialsScreen', { userData: data, token: token });
        }
    };
    const handleEditContacts = () => {
        console.log('edit contacts btn');
        // if (data) {
        //   props.navigation.navigate('EditContactsScreen', { userData: data, token: token });
        // }
    };
    const handleChangePassword = () => {
        console.log('change password clicked');
        console.log(token);
        if (token) {
            props.navigation.navigate('EditPasswordScreen', { token: token });

        }
    };
    const renderItem = ({ item }) => (
        <View >
            <Text>{item.name} </Text>
            <Text> {item.number} </Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* <LinearGradient
        colors={['#145cfe', '#3489FD', '#5FFBF1']}
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      > */}
            <View style={styles.profileContainer}>
                <View style={styles.profileImageContainer}>
                    {/* Profile image component goes here */}
                </View>
                <Text style={styles.profileName}>{data.name}</Text>
                <Text style={styles.profileEmail}>{data.email}</Text>
                <Text style={styles.profileEmail}>{data.userPhoneNumber}</Text>
                <Btn btnLabel="Edit" Press={handleEdit} />


            </View>
            <Btn btnLabel="Change Password" Press={handleChangePassword} />

            <View style={[styles.section, styles.statisticsSection]}>
                <Text style={styles.sectionTitle}>Emergency contacts</Text>
                <Btn btnLabel="Edit Contacts" Press={handleEditContacts} />

                <FlatList
                    style={styles.listContainer}
                    data={data.emergencyContacts}
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.id}-${item.name}`}
                />

            </View>
            <Btn title="Submit" btnLabel="Delete Account" Press={handleSubmit} />
            <Btn title="Submit" btnLabel="Logout" Press={handleLogout} />

            {/* </LinearGradient> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    profileImageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ffffff',
        marginBottom: 10,
        elevation: 5,
        // Add additional styling as needed
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 10,
    },
    profileEmail: {
        fontSize: 16,
        color: '#ffffff',
    },
    section: {
        width: '100%',
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    statisticsSection: {
        backgroundColor: '#ffffff',
        elevation: 5,
        // Add additional styling as needed
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default UserProfileScreen;
