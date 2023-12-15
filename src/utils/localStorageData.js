/* eslint-disable prettier/prettier */
import * as Keychain from 'react-native-keychain';

export const storeUserDataToSecureStorage = async (userData) => {
    try {
        const jsonValue = JSON.stringify(userData);
        await Keychain.setGenericPassword('user-data', jsonValue, { service: 'myService' });
        return true;
    } catch (error) {
        return false;
    }
};

export const getUserDataFromSecureStorage = async () => {
    try {
        const credentials = await Keychain.getGenericPassword({ service: 'myService' });
        if (credentials) {
            const userData = JSON.parse(credentials.password);
            return userData;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

export const deleteDataFromSecureStore = async () => {
    try {
        await Keychain.resetGenericPassword({ service: 'myService' });
        return true;
    } catch (error) {
        return false;
    }
};
