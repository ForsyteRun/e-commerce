import convertDataToDateOfBirth from '.';

describe('convertDataToDateOfBirth', () => {
  it('convert data to dateOfBirth', () => {
    const data = {
      dayOfBirthDay: '15',
      monthOfBirthDay: 'August',
      yearOfBirthDay: '2023',
    };

    const result = convertDataToDateOfBirth(data);

    expect(result).toBe('2023-8-15');
  });
});
