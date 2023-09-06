import isCorrectAttributeType from './isCorrectAttributeType';

describe('Testing isCorrectAttributeType', () => {
  it('Should be truthy', () => {
    expect(isCorrectAttributeType('string')).toBeTruthy();
    expect(isCorrectAttributeType(777)).toBeTruthy();
    expect(isCorrectAttributeType(false)).toBeTruthy();
  });
  it('Should be falsy', () => {
    expect(isCorrectAttributeType(null)).toBeFalsy();
    expect(isCorrectAttributeType(undefined)).toBeFalsy();
    expect(isCorrectAttributeType([])).toBeFalsy();
    expect(isCorrectAttributeType({})).toBeFalsy();
    expect(isCorrectAttributeType(NaN)).toBeFalsy();
  });
});
