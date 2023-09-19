import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'min 8 characters long')
    .matches(/^(?=.*[a-z])/, 'min 1 lowercase letter')
    .matches(/^(?=.*[A-Z])/, 'min 1 uppercase letter')
    .matches(/^(?=.*\d)/, 'min 1 number')
    .required('Required'),
  // currentPassword: Yup.string()
  //   .min(8, 'min 8 characters long')
  //   .matches(/^(?=.*[a-z])/, 'min 1 lowercase letter')
  //   .matches(/^(?=.*[A-Z])/, 'min 1 uppercase letter')
  //   .matches(/^(?=.*\d)/, 'min 1 number')
  //   .required('Required'),
  // newPassword: Yup.string()
  //   .min(8, 'min 8 characters long')
  //   .matches(/^(?=.*[a-z])/, 'min 1 lowercase letter')
  //   .matches(/^(?=.*[A-Z])/, 'min 1 uppercase letter')
  //   .matches(/^(?=.*\d)/, 'min 1 number')
  //   .required('Required'),
  // repeatNewPassword: Yup.string()
  //   .min(8, 'min 8 characters long')
  //   .matches(/^(?=.*[a-z])/, 'min 1 lowercase letter')
  //   .matches(/^(?=.*[A-Z])/, 'min 1 uppercase letter')
  //   .matches(/^(?=.*\d)/, 'min 1 number')
  //   .required('Required')
  //   .oneOf([Yup.ref('newPassword')], 'Passwords must match'),
});

export default validationSchema;
