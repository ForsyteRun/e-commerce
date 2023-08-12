import regex from '../../../constants/regex';

function validateEmail(email: string) {
  let errorMessage: string;
  if (!email) {
    errorMessage = 'This field is required';
  } else if (!regex.email.test(email)) {
    errorMessage = 'Please enter a valid email address';
  } else {
    errorMessage = '';
  }
  return errorMessage;
}

export default validateEmail;
