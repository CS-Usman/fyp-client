/* eslint-disable prettier/prettier */
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';
import { extractDistanceDataset, generateWeekNames, generateDistanceDataset } from '../utils/distanceDataset';
import { extractSpeedDataset, generateSpeedDataset } from '../utils/speedDataset';

export const getUserApi = async ({ email, token }) => {
    if (!email) { return false; }
    try {
        const response = await axiosInstance.get('/', {
            params: { email },
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        const weekNames = generateWeekNames(response.data.user.travelHistory);
        const weekDistance = generateDistanceDataset(response.data.user.travelHistory);
        const weekSpeed = generateSpeedDataset(response.data.user.travelHistory);
        if (response.data.success) {
            extractDistanceDataset(weekNames, weekDistance);
            extractSpeedDataset(weekNames, weekSpeed)
        }
        return response.data.user;
    } catch (error) {
        throw new Error(`Error in getUserApi: ${error.message}`);
    }
};

export const updateUserApi = async (data, token) => {

    try {
        const response = await axiosInstance.put(
            '/',
            data,
            {
                headers: {
                    Accept: 'application/json',
                    authorization: `Bearer ${token.token}`,
                },
                params: {
                    email: data.email,
                },
            }
        );

        return response.data;
    } catch (error) {
        throw new Error(`Error in updateApi: ${error.message}`);
    }
};

export const deleteUserApi = async ({ email, token }) => {

    try {
        const response = await axiosInstance.delete('/', {
            params: { email },
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error in deleteApi: ${error.message}`);
    }
};


export const sendSMSApi = async ({ email, location, token }) => {
    const body = {
        email: email,
        location: location,
    };
    try {
        const response = await axiosInstance.post('/send-sos', body, {
            headers: {
                Accept: 'application/json',
                authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error in send sms Api: ${error.message}`);
    }
};

export const changePasswordApi = async (data) => {
    const { token } = data;
    const body = {
        password: data.password,
    };
    try {
        const response = await axiosInstance.put('/change-password', body, {
            headers: {
                Accept: 'application/json',
                authorization: `Bearer ${token}`,
            },
            params: {
                email: data.email,
            },
        });
        return response.data.token;
    } catch (error) {
        throw new Error(`Error in changePasswordApi: ${error.message}`);
    }
};

export const setDataset = async (data) => {
    const { token } = data;
    const body = {
        location: {
            latitude: data.latitude,
            longitude: data.longitude,
        },
        distance: data.distance,
        speed: data.speed,
    };
    try {
        const response = await axiosInstance.put('/update-dataset', body, {
            headers: {
                Accept: 'application/json',
                authorization: `Bearer ${token}`,
            },
            params: {
                email: data.email,
            },
        });
        return response.data.success;
    } catch (error) {
        throw new Error(`Error in update dataset api: ${error.message}`);
    }
};

export const getArduinoServerData = async () => {
    try {
        const response = await axios.get('https://iasfbiafvqaebgi.000webhostapp.com/');
        return response;
    } catch (error) {
        throw new Error(`Error in update dataset api: ${error.message}`);
    }
};
