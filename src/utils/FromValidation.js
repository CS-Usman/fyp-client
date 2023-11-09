/* eslint-disable prettier/prettier */
import * as yup from 'yup';

const LoginValidationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email'),
    password: yup.string().required(),
});

export const SignUpValidationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().required('Username is required').email('Invalid email'),

    userPhoneNumber: yup
        .string()
        .required('Phone number is required')
        .matches(/^\d{11}$/, 'Invalid phone number'),
});

export const PasswordValidationSchema = yup.object().shape({
    password: yup
        .string()
        .required()
        .min(8)
        .max(12, 'Password should not exceed 12 characters.'),
    confirmPassword: yup.string().required(),
});

export const EmailValidationSchema = yup.object().shape({
    email: yup.string().required('Email is required').email('Invalid email'),
});

export const OtpValidationSchema = yup.object().shape({
    otp: yup
        .string()
        .required()
        .min(6)
        .max(6),
});


export default LoginValidationSchema;
