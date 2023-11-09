/* eslint-disable prettier/prettier */
import { PermissionsAndroid } from 'react-native';
import RNBluetoothClassic from 'react-native-bluetooth-classic';


export const requestPermission = async () => {
    const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
            title: 'Access fine location required for discovery',
            message:
                'In order to perform discovery, you must enable/allow ' +
                'fine location access.',
            buttonNeutral: 'Ask Me Later"',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        }
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
};

export const discoverDevices = async () => {

    try {
        // if device already paired
        const paired = await RNBluetoothClassic.getBondedDevices();
        const pairedDevice = paired.find(device => device.name === 'HC-05');
        if (pairedDevice) {
            return {
                name: pairedDevice.name,
                address: pairedDevice.address,
                bonded: pairedDevice.bonded,
            };
        }
        const unpaired = await RNBluetoothClassic.startDiscovery();
        const hc05Device = unpaired.find(device => device.name === 'HC-05');
        if (hc05Device) {
            return {
                name: hc05Device.name,
                address: hc05Device.address,
                bonded: hc05Device.bonded,
            };
        } else {
            return null;
        }
    } catch (err) {
        return {
            text: err.message,
            duration: 2000,
        };
    }
};


export const enableBluetooth = async () => {
    try {
        const response = await RNBluetoothClassic.requestBluetoothEnabled();
        return response;
    } catch (error) {
        throw error;
    }
};

export const pairWithDevice = async (address) => {
    try {
        const response = await RNBluetoothClassic.pairDevice(address);
        return response;
    } catch (error) {
        throw error;
    }
};

export const connectDevice = async (address) => {
    try {
        const response = RNBluetoothClassic.onDeviceConnected(address);
        return response;
    } catch (error) {
        throw error;
    }
};

