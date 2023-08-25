import transformProductAttributes from './transformProductAttributes';
import {
  correctAttributesTest,
  correctAttributesTestResult,
  undefinedAttributesTest,
  notOnlyCorrectAttributesTest,
  notOnlyCorrectAttributesTestResult,
} from './stubs/transformProductAttributes.stubs';

describe('Test transformProductAttributes', () => {
  it('Should return correct attributes object', () => {
    expect(transformProductAttributes(correctAttributesTest)).toStrictEqual(
      correctAttributesTestResult
    );
  });

  it('Should return object with only correct attributes', () => {
    expect(
      transformProductAttributes(notOnlyCorrectAttributesTest)
    ).toStrictEqual(notOnlyCorrectAttributesTestResult);
  });

  it('Should return "undefined"', () => {
    expect(transformProductAttributes(undefinedAttributesTest)).toBeUndefined();
  });
});
