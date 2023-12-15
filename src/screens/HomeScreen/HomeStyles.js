/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 17,
    color: '#ffffff',
  },
  bottomSheetContent: {
    backgroundColor: 'black',
    flex: 1,
  },
  bottomSheetContainer: {
    backgroundColor: 'black',
    width: '100%',
    flex: 1,
  },
  sectionTitle: {
    fontSize: responsiveFontSize(2),
    fontFamily: 'Montserrat-Bold',
    paddingLeft: responsiveWidth(4),
    marginVertical: responsiveHeight(2.5),
    color: 'white',
  },
  nameTitle: {
    fontSize: responsiveFontSize(3.5),
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
    marginLeft: responsiveScreenWidth(0.5),
    paddingTop: responsiveScreenHeight(5),
    paddingBottom: responsiveScreenHeight(3),
  },
  sosimg: {
    height: responsiveHeight(6),
    width: responsiveWidth(12),
  },
  featureContainer: {
    flexDirection: 'row',
    width: '100%',
    flex: 1,
    backgroundColor: 'black',
  },
  sosContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(4),
  },
  space: {
    marginVertical: responsiveHeight(1),
  },
  piechartText: {
    fontFamily: 'Montserrat-Bold',
    backgroundColor: '#0000',
  },
  profileimg: {
    height: responsiveHeight(7.5),
    width: responsiveWidth(14),
  },
  graphLegend: {
    fontFamily: 'Montserrat-Bold',
    color: '#3dc6b9',
    textAlign: 'center',
    marginBottom: responsiveHeight(1),
    backgroundColor: '#0000',
  },
  section: {
    width: responsiveScreenWidth(89),
    borderRadius: 8,
    paddingVertical: responsiveHeight(2.5),
    paddingHorizontal: 20,
  },
  featureSection: {
    marginTop: responsiveScreenHeight(2),
    backgroundColor: 'black',
    elevation: 1,
    borderRadius: 25,
    height: responsiveScreenHeight(9),
    flex: 1,
    flexDirection: 'row',
  },
  featureText: {
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff',
  },
  featureTextsmall: {
    fontSize: responsiveFontSize(1),
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: responsiveScreenWidth(85),
  },
  arrowstyle: {
    flex: 1,
  },

});

export default styles;
