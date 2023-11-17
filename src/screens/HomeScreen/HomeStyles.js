/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';
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
  section: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginBottom: 20,
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
  featureSection: {
    backgroundColor: 'black',
    elevation: 1,
    borderRadius: 25,
    height: responsiveScreenHeight(9),
    flex: 1,
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  nameTitle: {
    fontSize: responsiveFontSize(5),
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: responsiveScreenWidth(0.5),
    paddingTop: responsiveScreenHeight(5),
    paddingBottom: responsiveScreenHeight(3),
  },
  sosimg: {
    height: responsiveHeight(11),
    width: responsiveWidth(18),
  },
  featureContainer: {
    flexDirection: 'row',
    width: '100%',
    margintop: 40,
    flex: 1,
    backgroundColor: 'black',
  },
  sosContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(4),
  },
  feature: {
    backgroundColor: 'black',
    borderRadius: 8,
    width: responsiveWidth(70),
    flexDirection: 'row',
    justifyContent: 'center',
    height: responsiveScreenHeight(4),
  },
  featureText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  featureTextsmall: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: 'transparent',
    width: responsiveScreenWidth(85),
  },

  space: {
    width: 10,
  },
});

export default styles;
