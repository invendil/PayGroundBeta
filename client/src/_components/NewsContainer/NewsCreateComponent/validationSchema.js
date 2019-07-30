import * as yup from "yup";
import moment from 'moment'

const minDate = moment().add(7, 'd')._d;

export const validationSchema = yup.object({
    title: yup
        .string()
        .max(40, 'Too long')
        .required('Required field'),
    bodyMD: yup
        .string()
        .required('Required field')

});