import getDaysOfMonth from '.';

describe('getDaysOfMonth', () => {
  it('number of days for a given month', () => {
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const month = 'March';
    const daysCount = 31;

    const daysOfMonth = getDaysOfMonth(month, days);

    expect(daysOfMonth).toHaveLength(daysCount);
  });
});
