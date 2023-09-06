import { TypedMoney } from '@commercetools/platform-sdk';
import { Mutable } from 'types';
import calculatePriceByFraction from './calculatePriceByFraction';

describe('Testing calculatePriceByFraction', () => {
  const testData: Mutable<TypedMoney> = {
    type: 'centPrecision',
    currencyCode: 'EUR',
    centAmount: 500,
    fractionDigits: 2,
  };

  beforeEach(() => {
    testData.centAmount = 500;
    testData.fractionDigits = 2;
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

  it('Should return "0" if price equals "NaN"', () => {
    testData.centAmount = NaN;
    expect(calculatePriceByFraction(testData)).toBe(0);
  });

  it('Should return "0" if fractionDigits equals "NaN"', () => {
    testData.fractionDigits = NaN;
    expect(calculatePriceByFraction(testData)).toBe(0);
  });
});
