/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';

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
    featureSection: {
        position: 'relative',
        top: 0,
        bottom: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        elevation: 1,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    featureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    feature: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        elevation: 5,
        borderRadius: 8,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
    },
    featureText: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
    },

    space: {
        width: 10,
    },
});

export default styles;
