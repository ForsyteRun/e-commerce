import regex from 'pages/LoginPage/constants/regex';

function validateEmail(email: string): string | undefined {
  let errorMessage: string | undefined;
  if (!email) {
    errorMessage = 'This field is required';
  } else if (!regex.email.test(email)) {
    errorMessage = 'Please enter a valid email address';
  }
  return errorMessage;
}

export default validateEmail;
