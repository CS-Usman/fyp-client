/* eslint-disable prettier/prettier */
import axios from 'axios';
import axiosInstance from '../utils/axiosInstance';
export const loginApi = async (data) => {
    try {
        const response = await axios.post(
            'https://smartrideec2.ddns.net:3001/users/login',
            data,
            {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        );
        return response.data.data;
    } catch (error) {
        throw new Error(`Error in loginApi: ${error.message}`);
    }
};

export const signupApi = async (data) => {
    try {
        const response = await axios.post(
            'https://smartrideec2.ddns.net:3001/users/sign-up',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        console.log(response);
        return response.data.success;
    } catch (error) {
        throw new Error(`Error in signupApi: ${error.message}`);
    }
};

export const forgotPasswordApi = async (data) => {
    const forgotPasswordUrl = encodeURI('https://smartrideec2.ddns.net:3001/users/forgot-password');
    try {
        const response = await axios.post(forgotPasswordUrl, data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });

        return response.data.data;
    } catch (error) {
        throw new Error(`Error in forgotPasswordApi: ${error.message}`);
    }
};

export const resetPasswordApi = async (data) => {
    const ResetPasswordUrl = encodeURI('https://smartrideec2.ddns.net:3001/users/reset-password');
    const queryParams = {
        email: data.email,
        resetToken: data.token,
    };
    const body = {
        newPassword: data.password,
        confirmPassword: data.confirmPassword,
    };

    try {
        const response = await axios.put(ResetPasswordUrl, body, { params: queryParams });

        return response.data;
    } catch (error) {
        throw new Error(`Error in resetPasswordApi: ${error.message}`);
    }
};

export const logoutApi = async ({ email, token }) => {
    try {
        const response = await axiosInstance.delete('/logout', {
            params: { email },
            headers: {
                authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        throw new Error(`Error in logoutApi: ${error.message}`);
    }
};

export const validateToken = async ({ email, token }) => {
    if (!email) { return false; }
    const validateTokenUrl = encodeURI('https://smartrideec2.ddns.net:3001/users/validate-token');
    const queryParams = {
        email: email,
    };
    const body = {
        token: token,
    };

    try {
        const response = await axios.post(validateTokenUrl, body, { params: queryParams });
        return response.data.data.validate;
    } catch (error) {
        return false;
    }
};

export const refreshToken = async ({ email }) => {
    if (!email) { return false; }
    const refreshTokenUrl = encodeURI('https://smartrideec2.ddns.net:3001/users/refresh-token');
    const body = {
        email: email,
    };

    try {
        const response = await axios.post(refreshTokenUrl, body);
        return response.data.data;
    } catch (error) {
        throw new Error(`Error in refreshToken Api: ${error.message}`);
    }
};



