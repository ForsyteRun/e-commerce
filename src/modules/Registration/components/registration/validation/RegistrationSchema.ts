import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'no special characters or numbers')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'no special characters or numbers')
    .required('Required'),
  email: Yup.string()
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email')
    .required('Required'),
  password: Yup.string()
    .min(8, 'min 8 characters long')
    .matches(/^(?=.*[a-z])/, 'min 1 lowercase letter')
    .matches(/^(?=.*[A-Z])/, 'min 1 uppercase letter')
    .matches(/^(?=.*\d)/, 'min 1 number')
    .matches(
      /^(?=.*[$&+,:;=?@#|'`~<>_{}.^*()%!]).+$/,
      'min 1 special character'
    )
    .matches(/^\S(.*\S)?$/, 'no leading or trailing whitespace')
    .required('Required'),
  dateOfBirth: Yup.date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 13)),
      'Must be 13 years or older'
    )
    .required('Required'),
});

export default RegistrationSchema;
