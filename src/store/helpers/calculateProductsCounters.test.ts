import { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk';
import calculateProductsCounters from './calculateProductsCounters';

describe('Testing calculateProductsCounters', () => {
  const basicTestData: Omit<ProductProjectionPagedQueryResponse, 'results'> = {
    limit: 10,
    offset: 0,
    count: 10,
    total: 123,
  };
  let testData = { ...basicTestData };

  afterEach(() => {
    testData = { ...basicTestData };
  });

  it('Should return correctly calculated data with offset = "0"', () => {
    const result = {
      ...testData,
      page: 1,
      totalPages: 13,
    };

    expect(calculateProductsCounters(testData)).toStrictEqual(result);
  });

  it('Should return correctly calculated data with offset > "0" & <= offset', () => {
    testData.offset = 5;
    const result = {
      ...testData,
      page: 2,
      totalPages: 13,
    };

    expect(calculateProductsCounters(testData)).toStrictEqual(result);

    testData.offset = 13;
    result.page = 3;
    result.offset = 13;

    expect(calculateProductsCounters(testData)).toStrictEqual(result);
  });

  it('Should return page = "1" if offset < 0', () => {
    testData.offset = -4;
    const result = {
      ...testData,
      offset: -4,
      page: 1,
      totalPages: 13,
    };

    expect(calculateProductsCounters(testData)).toStrictEqual(result);
  });

  it('Should return page = totalPages if offset * limit > total', () => {
    testData.offset = 124;
    const result = {
      ...testData,
      offset: 124,
      page: 13,
      totalPages: 13,
    };

    expect(calculateProductsCounters(testData)).toStrictEqual(result);
  });

  it('Should return data with totalPages = "1" if there is no "total" undefined', () => {
    const { limit, offset, count } = testData;
    const noTotal = { limit, offset, count };
    const result = {
      ...noTotal,
      page: 1,
      totalPages: 1,
    };

    expect(calculateProductsCounters(noTotal)).toStrictEqual(result);
  });
});
