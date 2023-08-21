import validationSchema from './validationSchema';

describe('Yup Validation Schema', () => {
  it('validates with correct data', async () => {
    const validData = {
      email: 'valid@example.com',
      password: 'ValidPassword1!',
    };

    await expect(validationSchema.validate(validData)).resolves.toBe(validData);
  });

  it('fails validation with incorrect data', async () => {
    const invalidData = {
      email: 'invalid-email',
      password: 'invalid',
    };
    await expect(validationSchema.validate(invalidData)).rejects.toThrow();
  });
});
