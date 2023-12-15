/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the Icon component
import {
  responsiveWidth,
  responsiveScreenWidth,
  responsiveScreenHeight,
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

export default function Profilebuttons({ icon, Press, color, text, textsmall }) {
  return (

    <View style={[styles.section, styles.featureSection]}>
      <View style={{ flex: 1 }}>
        <Icon
          name={icon}
          size={25}
          color={color}
          style={{ marginRight: responsiveWidth(5) }}
        />
      </View>
      <View style={{ flex: 4 }}>
        <TouchableOpacity onPress={Press}>
          <Text style={styles.featureText}>{text}
          </Text>
          <Text style={{ alignItems: 'center', color: 'white', fontSize: responsiveFontSize(1.5), fontFamily: 'Montserrat-Medium', }}>
            {textsmall}
          </Text>
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity onPress={Press}>
          <Icon
            name="arrow-right"
            size={30}
            style={{ marginRight: responsiveWidth(2) }}
            color="#4df8e8"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
