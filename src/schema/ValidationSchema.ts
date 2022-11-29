import * as Yup from 'yup';
import moment from 'moment';
import { regexValidation } from '../helpers/regex';

export const FormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    mobileNumber: Yup.string().required('Mobile number required').matches(regexValidation.MobileValidations, 'Mobile number its not valid'),
    firstName: Yup.string()
         .min(2, 'Too Short')
         .max(8, 'Too long')
         .required('Required'),
    dataBirth: Yup.date().required('Please Select the start date'),
    password: Yup.string().min(8, 'Your password is too short.').required('Password is required').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    profession: Yup.string().required('Please Select the profession'),
    friends: Yup.array().of(
         Yup.object().shape({
              name: Yup.string().required('Name is required'),
              email: Yup.string()
                   .email('Invalid email address')
                   .required('Required'),
              includeAge: Yup.bool(),
              age: Yup.mixed().when('includeAge', {
                   is: true,
                   then: Yup.number()
                        .nullable()
                        .transform((value) =>
                        isNaN(value) ? undefined : value
                        )
                        .test(
                         "age",
                         "Please choose a valid date of birth",
                         (value:any) => {
                              console.log(value, 'value')
                           return value >  18;
                         }
                       )
                        .required('Age is required'),
                   otherwise: Yup.number().nullable(),
              }),
         })
    ),
})