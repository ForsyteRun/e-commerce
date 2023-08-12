import regex from '../../../constants/regex';

function validatePassword(password: string) {
  let errorMessage: string;
  if (!password) {
    errorMessage = 'This field is required';
  } else if (!regex.passwordLength.test(password)) {
    errorMessage = 'Password must contain at least 8 characters long';
  } else if (!regex.number.test(password)) {
    errorMessage = 'Password must contain at least one digit';
  } else if (!regex.upperCase.test(password)) {
    errorMessage = 'Password must contain at least one uppercase letter';
  } else if (!regex.lowerCase.test(password)) {
    errorMessage = 'Password must contain at least one lowercase letter';
  } else if (!regex.specialCharacter.test(password)) {
    errorMessage = 'Password must contain at least one special character';
  } else if (!regex.noLeadingTrailingSpace.test(password)) {
    errorMessage = 'Password must not contain leading or trailing whitespace';
  } else {
    errorMessage = '';
  }
  return errorMessage;
}

export default validatePassword;
