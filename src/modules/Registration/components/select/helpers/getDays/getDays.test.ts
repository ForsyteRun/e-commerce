import getDays from './getDays';

describe('getDays test', () => {
  it('Days between startDays and endDays', () => {
    const result = getDays(1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('When startDays and endDays are the same', () => {
    const result = getDays(10, 10);
    expect(result).toEqual([10]);
  });

  it('When startDays is greater than endDays', () => {
    const result = getDays(7, 3);
    expect(result).toEqual([]);
  });
});
