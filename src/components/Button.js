/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Btn({ btnLabel, Press }) {
    return (
        <TouchableOpacity onPress={Press} style={styles.btnStyle}>
            <LinearGradient
                colors={['#3dc6b9', '#4df8e8']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}>
                <Text style={styles.buttonText}>{btnLabel} </Text>
            </LinearGradient>
        </TouchableOpacity>
    );
}

export function GoogleBtn({ btnLabel, Press }) {
    return (
        <TouchableOpacity
            onPress={Press}
            style={[styles.btnStyle, { backgroundColor: '#ffff' }]}>
            <Text style={[styles.btnTextStyle, { color: '#4b3ca7' }]}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    );
}

export function AcceptBtn({ btnLabel, Press }) {
    return (
        <TouchableOpacity
            onPress={Press}
            style={[styles.btnStyle, { backgroundColor: '#28a745' }]}>
            <Text style={[styles.btnTextStyle]}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
    );
}
export function AddToEmergencyContactBtn({ btnLabel, Press }) {
    return (
        <TouchableOpacity onPress={Press} style={styles.emergencyBtnStyle}>
            <Text style={[styles.btnTextStyle]}>{btnLabel}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnStyle: {
        borderRadius: 100,
        alignItems: 'center',
        paddingVertical: responsiveHeight(1.5),
        marginVertical: responsiveHeight(1),
    },
    gradient: {
        padding: responsiveWidth(5),
    },
    btnTextStyle: {
        color: '#ffff',
        fontSize: responsiveFontSize(2.5),
        fontWeight: 'bold',
    },
    emergencyBtnStyle: {
        backgroundColor: '#4b3ca7',
        borderRadius: 100,
        alignItems: 'center',
        width: responsiveWidth(90),
        paddingVertical: responsiveHeight(1.5),
        marginVertical: responsiveHeight(1),
    },
});
