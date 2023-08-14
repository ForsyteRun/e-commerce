import validateEmail from './validateEmail';

describe('Validate email', () => {
  it('should return an error message for an empty email', () => {
    const errorMessage = validateEmail('');
    expect(errorMessage).toBe('This field is required');
  });

  it('should return an error message for an invalid email format', () => {
    const errorMessage = validateEmail('invalid-email');
    expect(errorMessage).toBe('Please enter a valid email address');
  });
});
