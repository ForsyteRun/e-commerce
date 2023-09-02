import * as Yup from 'yup';

const lastNameSchema = Yup.object().shape({
  lastName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'no special characters or numbers')
    .required('Required'),
});
export default lastNameSchema;
