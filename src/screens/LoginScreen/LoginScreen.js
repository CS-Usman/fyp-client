/* eslint-disable prettier/prettier */

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';

import styles from './LoginStyles.js'; //
import LinearGradient from 'react-native-linear-gradient';
import {Formik} from 'formik';

import Btn, {GoogleBtn, SigninBtn, SignupBtn} from '../../components/Button';
import Field from '../../components/TextInput';
import Title, {Subtitle, Info} from '../../components/Text.js';

import LoginValidationSchema from '../../utils/FromValidation.js';
import {loginApi} from '../../services/AuthApiService.js';
import {storeUserDataToSecureStorage} from '../../utils/localStorageData.js';

const LoginScreen = props => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async values => {
    // const responseFromServer = await loginApi(values);
    // const responseFromLocalStorage = await storeUserDataToSecureStorage(
    //     responseFromServer
    // );
    // const data = { ...responseFromServer };
    // console.log(data);
    // if (responseFromServer && responseFromLocalStorage) {
    // props.navigation.navigate('HomeScreen');
    // } else {
    //     return 'Error occurs during user login';
    // }
  };

  return (
    <KeyboardAvoidingView>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.img}>
        <View style={styles.container}>
          <View style={styles.loginContainer}>
            <View style={styles.loginInfoView}>
              <Title content="LOGIN" />
              <Info content="Get Started" />
            </View>

            <Formik
              initialValues={initialValues}
              validationSchema={LoginValidationSchema}
              onSubmit={handleSubmit}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <>
                  <Field
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Enter email"
                    placeholderTextColor="#a9a9a9"
                  />
                  {errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  <Field
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Password"
                    placeholderTextColor="#a9a9a9"
                    secureTextEntry
                  />

                  {errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                  <TouchableOpacity
                    style={styles.forgotPassword}
                    onPress={() =>
                      props.navigation.navigate('ForgotPasswordScreen')
                    }>
                    <View style={styles.forgotPasswordView}>
                      <Text style={styles.forgotPasswordText}>
                        Forgot Password ?
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <View style={styles.loginButtonView}>
                    <Btn title="Submit" btnLabel="LOGIN" Press={handleSubmit} />
                  </View>
                </>
              )}
            </Formik>
          </View>

          <LinearGradient
            colors={['#3dc6b9', '#4df8e8']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.signupContainer}>
            <Subtitle content="Don't have an account ?" />
            <SignupBtn
              btnLabel="Sign Up"
              // onPress={() => props.navigation.navigate('RegisterScreen')}
            />
          </LinearGradient>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
