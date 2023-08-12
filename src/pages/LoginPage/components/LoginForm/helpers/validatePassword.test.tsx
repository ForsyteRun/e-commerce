import validatePassword from './validatePassword';

describe('Validate password', () => {
  it('should return an error message for an empty password', () => {
    const errorMessage = validatePassword('');
    expect(errorMessage).toBe('This field is required');
  });

  it('should return an error message for a password with less than 8 characters', () => {
    const errorMessage = validatePassword('short');
    expect(errorMessage).toBe(
      'Password must contain at least 8 characters long'
    );
  });

  it('should return an error message for a password without a digit', () => {
    const errorMessage = validatePassword('PasswordWithoutDigit');
    expect(errorMessage).toBe('Password must contain at least one digit');
  });

  it('should return an error message for a password without an uppercase letter', () => {
    const errorMessage = validatePassword('passwordwithoutuppercase1');
    expect(errorMessage).toBe(
      'Password must contain at least one uppercase letter'
    );
  });

  it('should return an error message for a password without a lowercase letter', () => {
    const errorMessage = validatePassword('PASSWORDWITHOUTLOWERCASE1');
    expect(errorMessage).toBe(
      'Password must contain at least one lowercase letter'
    );
  });

  it('should return an error message for a password without a special character', () => {
    const errorMessage = validatePassword('PasswordWithoutSpecial1');
    expect(errorMessage).toBe(
      'Password must contain at least one special character'
    );
  });

  it('should return an error message for a password with leading whitespace', () => {
    const errorMessage = validatePassword('  PasswordWithSpace1!');
    expect(errorMessage).toBe(
      'Password must not contain leading or trailing whitespace'
    );
  });

  it('should return an error message for a password with trailing whitespace', () => {
    const errorMessage = validatePassword('PasswordWithSpace1!  ');
    expect(errorMessage).toBe(
      'Password must not contain leading or trailing whitespace'
    );
  });

  it('should return an empty string for a valid password', () => {
    const validPassword = 'ValidPassword1!';
    const errorMessage = validatePassword(validPassword);
    expect(errorMessage).toBe('');
  });
});
