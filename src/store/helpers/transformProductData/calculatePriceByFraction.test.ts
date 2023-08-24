import { TypedMoney } from '@commercetools/platform-sdk';
import calculatePriceByFraction from './calculatePriceByFraction';

describe('Testing calculatePriceByFraction', () => {
  const baseTestData: TypedMoney = {
    type: 'centPrecision',
    currencyCode: 'EUR',
    centAmount: 500,
    fractionDigits: 2,
  };
  let testData = { ...baseTestData };

  beforeEach(() => {
    testData = {
      type: 'centPrecision',
      currencyCode: 'EUR',
      centAmount: 500,
      fractionDigits: 2,
    };
  });

  it('Should return a correct integer with postitive fraction', () => {
    expect(calculatePriceByFraction(testData)).toBe(5);
  });

  it('Should return a correct integer with zero fraction', () => {
    testData.fractionDigits = 0;
    expect(calculatePriceByFraction(testData)).toBe(500);
  });

  it('Should return a correct integer with negative fraction', () => {
    testData.fractionDigits = -3;
    expect(calculatePriceByFraction(testData)).toBe(500);
  });

  it('Should return a fractional number with two fractional digits', () => {
    testData.centAmount = 33453;
    testData.fractionDigits = 3;
    expect(calculatePriceByFraction(testData)).toBe(33.45);
  });
});
