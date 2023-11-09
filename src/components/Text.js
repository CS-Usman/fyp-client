/* eslint-disable prettier/prettier */

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Title = ({ content }) => {
    return (
        <Text style={styles.title}>{content}</Text>
    );
};
export const SubHeading = ({ content }) => {
    return (
        <Text>{content}</Text>
    );
};
export const Subtitle = ({ content }) => {
    return (
        <Text style={styles.subtitle}>{content}</Text>
    );
};

export const Info = ({ content }) => {
    return (
        <Text style={styles.info}>{content}</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: responsiveFontSize(4),
        color: '#ffff',
    },
    subtitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: responsiveFontSize(2),
        color: '#ffff',
    },
    info: {
        fontFamily: 'Montserrat-Bold',
        fontSize: responsiveFontSize(2),
        color: '#a9a9a9',
    },

});

export default Title;
