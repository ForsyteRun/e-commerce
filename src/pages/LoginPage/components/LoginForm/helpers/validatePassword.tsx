import regex from 'pages/LoginPage/constants/regex';

function validatePassword(password: string): string | undefined {
  let errorMessage: string | undefined;

  const passwordRequirements = [
    { regex: regex.passwordLength },
    { regex: regex.number },
    { regex: regex.upperCase },
    { regex: regex.lowerCase },
    { regex: regex.specialCharacter },
    { regex: regex.noLeadingTrailingSpace },
  ];

  if (!password) {
    errorMessage = 'This field is required';
  } else {
    const hasErrors = passwordRequirements.some(
      (req) => !req.regex.test(password)
    );
    if (hasErrors) {
      errorMessage =
        'Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase letters, 1 digit and 1 special character, also, not contain leading or trailing whitespace.';
    }
  }

  return errorMessage;
}

export default validatePassword;
