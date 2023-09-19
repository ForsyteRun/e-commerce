import * as Yup from 'yup';

const firstNameSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'no special characters or numbers')
    .required('Required'),
});
export default firstNameSchema;
