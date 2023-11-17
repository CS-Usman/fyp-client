/* eslint-disable prettier/prettier */

import {StyleSheet, Dimensions} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

const {width} = Dimensions.get('window');

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
    marginTop: responsiveHeight(40),
  },
  loginContainer: {
    backgroundColor: '#1B1B1B',
    opacity: 0.95,
    width: responsiveWidth(95), // Responsive width
    paddingTop: responsiveHeight(5),
    alignItems: 'flex-start',
    paddingLeft: responsiveWidth(2.5), // Responsive padding
    borderRadius: 20,
    height: responsiveHeight(51), // Responsive height
  },
  loginInfoView: {
    paddingLeft: responsiveWidth(2.5),
    marginBottom: responsiveHeight(1),
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
    paddingLeft: responsiveWidth(5),
  },
  forgotPassword: {
    alignItems: 'flex-end',
    width: responsiveWidth(70),
    paddingRight: responsiveWidth(1.2), // Responsive padding
    marginBottom: responsiveHeight(4), // Responsive margin
  },
  loginButtonView: {
    width: responsiveWidth(80), // Responsive width
    alignItems: 'center',
    borderRadius: 20,
  },
  forgotPasswordText: {
    color: '#4df8e8',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2), // Responsive font size
  },
  signupContainer: {
    color: 'black',
    width: responsiveWidth(90),
    opacity: 0.8,
    padding: responsiveHeight(2),
    marginTop: responsiveHeight(5),
    alignItems: 'flex-start',
    paddingLeft: responsiveScreenWidth(5),
    borderRadius: 20,
    marginBottom: responsiveHeight(30),
    height: responsiveHeight(14),
  },
  signupText: {
    fontSize: responsiveFontSize(2), // Responsive font size
    fontWeight: 'bold',
  },
  signupLink: {
    color: '#4b3ca7',
  },
  forgotPasswordView: {
    paddingRight: responsiveScreenWidth(10),
    marginTop: responsiveHeight(1),
  },
});

export default styles;
