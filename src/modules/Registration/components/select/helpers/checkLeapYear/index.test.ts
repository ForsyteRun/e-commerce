import checkLeapYear from '.';

describe('checkLeapYear', () => {
  it('should return true for a leap year', () => {
    expect(checkLeapYear(2000)).toBe(true);
    expect(checkLeapYear(2004)).toBe(true);
    expect(checkLeapYear(2020)).toBe(true);
  });

  it('should return false for a non-leap year', () => {
    expect(checkLeapYear(2001)).toBe(false);
    expect(checkLeapYear(2022)).toBe(false);
    expect(checkLeapYear(2023)).toBe(false);
  });
});
