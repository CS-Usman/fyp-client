/* eslint-disable prettier/prettier */
import dayjs from 'dayjs';
import axios from 'axios';
import { getUserDataFromSecureStorage, storeUserDataToSecureStorage } from './localStorageData';
import { decode } from 'base-64';
global.atob = decode;
import { jwtDecode } from 'jwt-decode';

const baseURL = 'https://smartrideec2.ddns.net:3001/users';
const axiosInstance = axios.create({
    baseURL,
});

// Add a response interceptor

axiosInstance.interceptors.request.use(async req => {
    const { token } = await getUserDataFromSecureStorage();
    req.headers.Authorization = `Bearer ${token}`;

    const user = jwtDecode(token);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (!isExpired) { return req; }
    if (!user.UserInfo.username) { return false };

    const response = await axios.post(`${baseURL}/refresh-token`, {
        email: user.UserInfo.username,
    });
    const result = await storeUserDataToSecureStorage(response.data.data);
    req.headers.Authorization = `Bearer ${response.data.data.token}`;
    return req;
})


export default axiosInstance;
