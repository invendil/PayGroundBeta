import * as yup from "yup";

export const validationSchema = yup.object({
    username: yup
        .string()
        .required('Email is required field'),
    password: yup
        .string()
        .min(5, 'Password is too short')
        .required('Password is required field'),
});