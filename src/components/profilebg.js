/* eslint-disable prettier/prettier */
import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

export default function ProfileBg({ name, email, number }) {
  return (
    <LinearGradient
      colors={['#3dc6b9', '#4df8e8']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../../assets/icons/profile1.png')}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View style={{ flex: 3 }}>
          <Text style={styles.profileName}>{name}</Text>
        </View>
        <View style={[styles.profileinfo, styles.profileinfosection]}>
          <View>
            <Text style={styles.infotext}>Email Address</Text>
            <Text style={styles.profileEmail}>{email}</Text>
          </View>
          <View style={{ margin: 7 }} />
          <View>
            <Text style={styles.infotext}>Mobile Number</Text>
            <Text style={styles.profileEmail}>{number}</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginBottom: responsiveScreenHeight(5),
    paddingTop: responsiveScreenHeight(4),
    justifyContent: 'center',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(45),
  },
  profileName: {
    fontSize: 24,
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
    marginTop: 10,
    alignItems: 'center',

  },
  profileEmail: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',

  },
  profileinfo: {
    width: responsiveScreenWidth(90),
    borderRadius: 8,
    paddingTop: 10,
    paddingHorizontal: 20,

  },
  profileinfosection: {
    backgroundColor: 'black',
    flex: 4,
    opacity: 4,
    elevation: 1,
    borderRadius: 25,
    // opacity: 0.8,
  },
  infotext: {
    color: '#4df8e8',
    // fontWeight: 'bold',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
});
