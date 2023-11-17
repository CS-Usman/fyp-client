/* eslint-disable prettier/prettier */
import {Text, TouchableOpacity, StyleSheet, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the Icon component
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  responsiveScreenFontSize,
  responsiveScreenWidth,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';

export default function Profilebuttons({icon , Press,color, text, textsmall}) {
  return (
    
    <View style={[styles.section, styles.featureSection]}>
      <View style={{flex:1}}>
        <Icon
          name={icon}
          size={40}
          color={color}
          style={{marginRight: responsiveWidth(5)}}
        />
      </View>
      <View style={{flex:4}}>
        <TouchableOpacity onPress={Press}>
          <Text style={styles.featureText}>{text}
          </Text>
          <Text style={{alignItems: 'center', color: 'white'}}>
            {textsmall}
          </Text>
        </TouchableOpacity>
      </View>
      <View >
      <TouchableOpacity onPress={Press}>
          <Icon
            name="arrow-right"
            size={35}
            style={{marginRight: responsiveWidth(5)}}
            color="#4df8e8"
            
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    section: {
        width:responsiveScreenWidth(90),
        borderRadius: 8,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    featureSection: {
        marginTop:responsiveScreenHeight(2),
        backgroundColor: 'black',
        elevation: 1,
        borderRadius:25,
        height:responsiveScreenHeight(9),
        flex:1,
        flexDirection:'row'
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'white',
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
       backgroundColor:'transparent',
       width:responsiveScreenWidth(85),
    },
    arrowstyle:{
        flex:1,
    }

});
