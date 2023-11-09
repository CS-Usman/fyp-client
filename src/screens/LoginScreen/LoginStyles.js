/* eslint-disable prettier/prettier */

import { StyleSheet, Dimensions } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    img: {
        height: '100%', width: '100%',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
    title: {
        color: 'white',
        fontSize: responsiveFontSize(5.5), // Responsive font size
        fontWeight: 'bold',
        marginVertical: responsiveHeight(11), // Responsive margin
    },
    loginContainer: {
        backgroundColor: '#0000',
        opacity: 0.2,
        width: responsiveWidth(70),
        paddingTop: responsiveHeight(2),
        alignItems: 'center',
    },
    subtitle: {
        fontSize: responsiveFontSize(4.5), // Responsive font size
        color: '#4b3ca7',
        fontWeight: 'bold',
    },
    description: {
        color: 'grey',
        fontSize: responsiveFontSize(2), // Responsive font size
        fontWeight: 'bold',
        marginBottom: responsiveHeight(5), // Responsive margin
    },
    errorText: {
        color: 'red',
        fontStyle: 'italic',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        width: responsiveWidth(70),
        paddingRight: responsiveWidth(1.2), // Responsive padding
        marginBottom: responsiveHeight(4), // Responsive margin
    },
    forgotPasswordText: {
        textAlign: 'right',
        color: '#4b3ca7',
        fontWeight: 'bold',
        fontSize: responsiveFontSize(2), // Responsive font size
    },
    signupContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: responsiveHeight(2), // Responsive margin
    },
    signupText: {
        fontSize: responsiveFontSize(2), // Responsive font size
        fontWeight: 'bold',
    },
    signupLink: {
        color: '#4b3ca7',
    },
});

export default styles;
