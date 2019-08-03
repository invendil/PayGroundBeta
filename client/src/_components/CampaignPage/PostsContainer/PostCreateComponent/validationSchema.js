import * as yup from "yup";



export const validationSchema = yup.object({
    title: yup
        .string()
        .max(40, 'Too long')
        .required('Required field'),
    bodyMD: yup
        .string()
        .required('Required field')

});