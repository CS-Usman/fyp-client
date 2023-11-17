/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
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

export default function ProfileBg() {
  return (
    <LinearGradient
      colors={['#3dc6b9', '#4df8e8']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <View style={styles.profileContainer}>
        <View style={{flex:6}}>
          <Image
          source={require('../../assets/icons/profile1.png')}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={styles.profileName}>{'Adil Arif '}</Text>
        </View>
        <View style={[styles.profileinfo, styles.profileinfosection]}>
          <View>
            <Text style={styles.infotext}>Email Address</Text>
            <Text style={styles.profileEmail}>{'adilarif1234@gmail.com'}</Text>
          </View>
          <View style={{margin: 7}} />
          <View>
            <Text style={styles.infotext}>Mobile Number</Text>
            <Text style={styles.profileEmail}>{'0349 4021229'}</Text>
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
    paddingTop:responsiveScreenHeight(10),
    justifyContent: 'center',
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(50),
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    marginTop: 10,
    alignItems:'center',

  },
  profileEmail: {
    fontSize: 15,
    color: '#ffffff',
  },
  profileinfo: {
    width:responsiveScreenWidth(90),
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,

  },
  profileinfosection: {
    backgroundColor: 'black',
    flex:4,
    opacity: 4,
    elevation: 1,
    borderRadius: 25,
    opacity: 0.8,
  },
  infotext: {
    color: '#4df8e8',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
