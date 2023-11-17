/* eslint-disable prettier/prettier */
import React from 'react';
import { TextInput, StyleSheet, View, Image } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from 'react-native-responsive-dimensions';
const Field = props => {
    return <TextInput {...props} style={styles.fieldStyle} />;
};

export const SearchField = props => {
    return (
        <View style={styles.searchFieldContainer}>
            <TextInput
                {...props}
                style={styles.searchFieldStyle}
                placeholder="   Search Contact ..." />
        </View>
    );
};

const styles = StyleSheet.create({
    fieldStyle: {
        borderRadius: 100,
        color: 'white',
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(1),
        width: responsiveWidth(85),
        backgroundColor: '#171717',
        marginVertical: responsiveHeight(1.2),
    
    },

    searchFieldContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFF',
        borderRadius: 40,
        alignItems: 'center',
        paddingHorizontal: responsiveHeight(1),
    },
    searchFieldStyle: {
        paddingHorizontal: responsiveWidth(2),
        fontSize: responsiveFontSize(2),
    },
});

export default Field;
