import * as yup from "yup";

export const validationSchema = yup.object({

    body: yup
        .string()
        .min(5, 'Description is too short')
        .required('Required field'),

});