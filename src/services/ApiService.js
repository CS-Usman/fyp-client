/* eslint-disable prettier/prettier */
import axios from 'axios';
export const getUserApi = async ({ email, token }) => {
    const getApiUrl = encodeURI('http://192.168.1.3:3001/users/');

    try {
        const response = await axios.get(getApiUrl, {
            params: { email },
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        console.log(response);
        return response.data.user;
    } catch (error) {
        throw new Error(`Error in getDataApi: ${error.message}`);
    }
};

export const updateUserApi = async (data, token) => {
    const updateApiUrl = encodeURI('http://192.168.1.3:3001/users/');

    try {
        const response = await axios.put(
            updateApiUrl,
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
    console.log('data reaching api ', email, token);
    const deleteApiUrl = encodeURI('http://192.168.1.3:3001/users/');

    try {
        const response = await axios.delete(deleteApiUrl, {
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
    const sendSMSApiUrl = encodeURI('http://192.168.1.3:3001/users/send-sos');
    const body = {
        email: email,
        location: location,
    };
    try {
        const response = await axios.post(sendSMSApiUrl, body, {
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
    const changePasswordApiUrl = encodeURI('http://192.168.1.3:3001/users/change-password');
    try {
        const response = await axios.put(changePasswordApiUrl, body, {
            headers: {
                Accept: 'application/json',
                authorization: `Bearer ${token}`,
            },
            params: {
                email: data.email,
            },
        });
        return response.data;
    } catch (error) {
        throw new Error(`Error in changePasswordApi: ${error.message}`);
    }
};
