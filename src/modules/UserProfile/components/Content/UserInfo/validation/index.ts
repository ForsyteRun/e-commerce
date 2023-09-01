import * as Yup from 'yup';

const UserInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'no special characters or numbers')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'no special characters or numbers')
    .required('Required'),
  dateOfBirth: Yup.date()
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 13)),
      'Must be 13 years or older'
    )
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default UserInfoSchema;
