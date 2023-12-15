/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, ActivityIndicator } from 'react-native';
const LoadingPopup = () => {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 7000);
    }, []);

    return (
        <Modal transparent visible={isLoading}>
            <View style={styles.container}>
                <View style={styles.popup}>
                    <ActivityIndicator size="large" color="#4df8e8" />
                    <Text style={styles.text}>Loading contacts ...</Text>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    popup: {
        backgroundColor: '#1B1B1B',
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#a9a9a9',
    },
});

export default LoadingPopup;
