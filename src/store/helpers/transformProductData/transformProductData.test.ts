import transformProductData from '.';
import {
  productExampleTest,
  productExampleTestResult,
  requiredProductDataTest,
  requiredProductDataTestResult,
  partialProductDataTest,
  partialProductDataTestResult,
} from './stubs/transformProductData.stubs';

describe('Testing transformProductData', () => {
  it('Should return correctly parced product example', () => {
    expect(transformProductData(productExampleTest)).toStrictEqual(
      productExampleTestResult
    );
  });
  it('Should return correctly parced required product data', () => {
    expect(transformProductData(requiredProductDataTest)).toStrictEqual(
      requiredProductDataTestResult
    );
  });
  it('Should return correctly parced partial product data', () => {
    expect(transformProductData(partialProductDataTest)).toStrictEqual(
      partialProductDataTestResult
    );
  });
});
