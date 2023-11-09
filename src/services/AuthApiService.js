/* eslint-disable prettier/prettier */
import axios from 'axios';
export const loginApi = async (data) => {
    try {
        const response = await axios.post(
            'http://192.168.1.3:3001/users/login',
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
    console.log(data);
    try {
        const response = await axios.post(
            'http://192.168.1.3:3001/users/sign-up',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        return response.data.success;
    } catch (error) {
        throw new Error(`Error in signupApi: ${error.message}`);
    }
};

export const forgotPasswordApi = async (data) => {
    const forgotPasswordUrl = encodeURI('http://192.168.1.3:3001/users/forgot-password');
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
    const ResetPasswordUrl = encodeURI('http://192.168.1.3:3001/users/reset-password');
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
    const logoutUrl = encodeURI('http://192.168.1.3:3001/users/logout');

    try {
        const response = await axios.delete(logoutUrl, {
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

