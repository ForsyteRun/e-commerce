import convertDataToDateOfBirth from '.';

describe('convertDataToDateOfBirth', () => {
  it('convert data to dateOfBirth', () => {
    const data = {
      day: '15',
      month: 'August',
      year: '2023',
    };

    const result = convertDataToDateOfBirth(data);

    expect(result).toBe('2023-8-15');
  });
});
