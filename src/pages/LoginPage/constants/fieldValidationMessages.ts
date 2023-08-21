const fieldValidationMessages = {
  email: {
    required: 'Email field is required',
    invalid: 'Please enter a valid email address',
  },
  password: {
    required: 'Password field is required',
    invalid:
      'Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase letter, 1 digit, and 1 special character. It should also not contain leading or trailing whitespace.',
  },
};

export default fieldValidationMessages;
