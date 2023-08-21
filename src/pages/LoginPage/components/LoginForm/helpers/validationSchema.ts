import fieldValidationMessages from 'pages/LoginPage/constants/fieldValidationMessages';
import regex from 'pages/LoginPage/constants/regex';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required(fieldValidationMessages.email.required)
    .test(
      'valid-email',
      fieldValidationMessages.email.invalid,
      (value: string) => {
        return regex.email.test(value);
      }
    ),
  password: Yup.string()
    .required(fieldValidationMessages.password.required)
    .test(
      'valid-password',
      fieldValidationMessages.password.invalid,
      (value: string) => {
        return (
          regex.passwordLength.test(value) &&
          regex.number.test(value) &&
          regex.upperCase.test(value) &&
          regex.lowerCase.test(value) &&
          regex.specialCharacter.test(value) &&
          regex.noLeadingTrailingSpace.test(value)
        );
      }
    ),
});

export default validationSchema;
