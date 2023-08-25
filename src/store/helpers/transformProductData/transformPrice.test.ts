import transformPrice from './transformPrice';
import { basicTestData, basicResultData } from './stubs/transformPrice.stubs';

describe('Testing transformPrice', () => {
  it('Should return an object with correct net and discount prices with a currencyCode', () => {
    expect(transformPrice(basicTestData)).toStrictEqual(basicResultData);
  });

  it('Should return an object with correct net price with a currencyCode', () => {
    const { id, value } = basicTestData;
    const { currencyCode, net } = basicResultData;
    expect(transformPrice({ id, value })).toStrictEqual({ currencyCode, net });
  });
});
