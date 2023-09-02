/* eslint-disable no-restricted-globals */
import * as Yup from 'yup';

const UserInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'no special characters or numbers')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'no special characters or numbers')
    .required('Required'),
  dateOfBirth: Yup.string()
    .test('valid-date', 'Invalid date format (YYYY-MM-DD)', (value) => {
      if (!value) return true;
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
      if (!dateRegex.test(value)) return false;
      return true;
    })
    .test('valid-month', 'Incorrect month', (value) => {
      if (!value) return true;
      const [, month] = value.split('-').map(Number);
      return !isNaN(month) && month >= 1 && month <= 12;
    })
    .test('valid-day', 'Incorrect day', (value) => {
      if (!value) return true;
      const [, , day] = value.split('-').map(Number);
      return !isNaN(day) && day >= 1 && day <= 31;
    })
    .test('valid-year', 'Year must be after 1950', (value) => {
      if (!value) return true;
      const [year] = value.split('-').map(Number);
      return year >= 1950 && year <= new Date().getFullYear();
    })
    .test('minimumAge', 'Must be min 13 years old', (value) => {
      if (!value) return false;
      const minAgeDate = new Date();
      minAgeDate.setFullYear(minAgeDate.getFullYear() - 13);
      const selectedDate = new Date(value);
      return selectedDate <= minAgeDate;
    })
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default UserInfoSchema;
