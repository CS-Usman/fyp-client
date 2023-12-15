/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';
import { request, PERMISSIONS, check, RESULTS, checkMultiple, requestMultiple } from 'react-native-permissions';

export const ContactAccessPermission = async () => {
    if (Platform.OS === 'android') {
        const permissionStatus = await check(PERMISSIONS.ANDROID.READ_CONTACTS).then(async (result) => {
            if (RESULTS.DENIED) {
                const access = await request(PERMISSIONS.ANDROID.READ_CONTACTS).then((status) => {
                    return status;
                });
                return access;
            }
        });
        return permissionStatus === 'granted' ? true : false;
    }
    else {
        return false;
    }
};

export const LocationAccessPermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const permissionStatus = await checkMultiple([
                PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
            ]).then(async () => {
                if (RESULTS.DENIED) {
                    const access = await requestMultiple([
                        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
                        PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
                    ]).then((statuses) => {
                        return {
                            fineLocation: statuses[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION],
                            coarseLocation: statuses[PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION],
                        };
                    });
                    return access;
                }
            });
            if (permissionStatus.coarseLocation === 'granted' && permissionStatus.fineLocation === 'granted') {
                return true;
            }
        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
};


export const FileStoragePermission = async () => {
    if (Platform.OS === 'android') {
        try {
            const permissionStatus = await checkMultiple([
                PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
            ]).then(async () => {
                if (RESULTS.DENIED) {
                    const access = await requestMultiple([
                        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
                        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
                    ]).then((statuses) => {
                        return {
                            readFile: statuses[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE],
                            writeFile: statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE],
                        };
                    });
                    return access;
                }
            });
            if (permissionStatus.readFile === 'granted' && permissionStatus.writeFile === 'granted') {
                return true;
            }
        } catch (error) {
            return false;
        }
    } else {
        return false;
    }
};

export const SendSMSPermission = async () => {
    if (Platform.OS === 'android') {
        const { status } = await request(PERMISSIONS.ANDROID.SEND_SMS);
        console.log(status);
        // return status === 'granted' ? true : false;
    } else {
        return false;
    }
};
