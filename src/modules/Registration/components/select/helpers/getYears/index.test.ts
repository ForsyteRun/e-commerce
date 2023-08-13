import getYears from '.';

describe('getYears test', () => {
  it('Years between startYears and endYears', () => {
    const result = getYears(1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('When startYears and endYears are the same', () => {
    const result = getYears(10, 10);
    expect(result).toEqual([10]);
  });

  it('When startYears is greater than endYears', () => {
    const result = getYears(7, 3);
    expect(result).toEqual([]);
  });
});
