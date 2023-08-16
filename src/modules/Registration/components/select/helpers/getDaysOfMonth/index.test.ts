import getDaysOfMonth from '.';

describe('getDaysOfMonth', () => {
  it('number of days for full month', () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const month = 'March';
    const daysCount = 31;
    const chackLeapYear = false;

    const daysOfMonth = getDaysOfMonth(days, month, chackLeapYear);

    expect(daysOfMonth).toHaveLength(daysCount);
  });
  it('number of days for not full month', () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const month = 'June';
    const daysCount = 30;
    const chackLeapYear = false;

    const daysOfMonth = getDaysOfMonth(days, month, chackLeapYear);

    expect(daysOfMonth).toHaveLength(daysCount);
  });
  it('number of days for leap year', () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const month = 'February';
    const daysCount = 29;
    const chackLeapYear = true;

    const daysOfMonth = getDaysOfMonth(days, month, chackLeapYear);

    expect(daysOfMonth).toHaveLength(daysCount);
  });
  it('number of days for not leap year', () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const month = 'February';
    const daysCount = 28;
    const chackLeapYear = false;

    const daysOfMonth = getDaysOfMonth(days, month, chackLeapYear);

    expect(daysOfMonth).toHaveLength(daysCount);
  });
});
