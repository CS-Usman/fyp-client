/* eslint-disable prettier/prettier */
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserDataFromSecureStorage, storeUserDataToSecureStorage } from '../utils/localStorageData';
import { validateToken, refreshToken } from '../services/AuthApiService';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const validateUser = async () => {
        const user = await getUserDataFromSecureStorage();
        if (!user) {
            setIsLoggedIn(false);
            return;
        }
        const validate = await validateToken(user);
        if (validate) {
            setIsLoggedIn(true);
            return;
        }
        else {
            setIsLoggedIn(false);
            const getNewAccessToken = await refreshToken(user);
            if (!getNewAccessToken) {
                setIsLoggedIn(false);
            }
            const setUser = await storeUserDataToSecureStorage(getNewAccessToken);
            if (setUser && getNewAccessToken) {
                setIsLoggedIn(true);
            }
            return;
        }
    };
    useEffect(() => {
        validateUser();
    }, []);

    return <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
    </LoginContext.Provider>;
};

export const useLogin = () => useContext(LoginContext);
export default LoginProvider;
