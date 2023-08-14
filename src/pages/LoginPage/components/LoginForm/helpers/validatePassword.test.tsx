import validatePassword from './validatePassword';

describe('Validate password', () => {
  it('should return an error message for an empty password', () => {
    const errorMessage = validatePassword('');
    expect(errorMessage).toBe('This field is required');
  });

  it('should return an error message for invalid password', () => {
    const invalidPasswords = [
      'short',
      'passwordWithoutDigit!',
      'passwordwithoutuppercase1!',
      'PASSWORDWITHOUTLOWERCASE1!',
      'PasswordWithoutSpecial1',
      ' PasswordWithSpace1!',
      'PasswordWithSpace1! ',
    ];

    const errorMessage =
      'Password must be at least 8 characters long and contain at least 1 lowercase, 1 uppercase letters, 1 digit and 1 special character, also, not contain leading or trailing whitespace.';

    invalidPasswords.forEach((password) => {
      expect(validatePassword(password)).toBe(errorMessage);
    });
  });
});
