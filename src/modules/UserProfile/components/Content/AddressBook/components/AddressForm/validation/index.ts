import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  streetName: Yup.string()
    .required('Street is required')
    .min(1, 'Street must contain at least one character')
    .matches(/^[A-Za-z0-9\s]+$/, 'not contain special characters'),
  state: Yup.string()
    .required('state is required')
    .min(1, 'state must contain at least one character')
    .matches(/^[A-Za-z0-9\s]+$/, 'not contain special characters'),
  city: Yup.string()
    .required('City is required')
    .matches(/^[A-Za-z\s]+$/, 'City must contain only letters and spaces'),
  postalCode: Yup.string()
    .required('Postal Code is required')
    .test(
      'valid-postal-code',
      'Invalid postal code format',
      (value, context) => {
        const { country } = context.parent;

        const postalCodePattern: { [key: string]: RegExp } = {
          USA: /^\d{5}$|^\d{5}-\d{4}$/,
          Canada: /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/,
        };

        if (postalCodePattern[country]) {
          return postalCodePattern[country].test(value);
        }

        return true;
      }
    ),
});

export default validationSchema;
