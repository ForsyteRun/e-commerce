import { Price } from '@commercetools/platform-sdk';
import { IPriceData } from 'types';

export const basicTestData: Price = {
  id: 'b2080413-0595-4333-8f5d-01a19b51f19e',
  value: {
    type: 'centPrecision',
    currencyCode: 'EUR',
    centAmount: 65000,
    fractionDigits: 2,
  },
  discounted: {
    value: {
      type: 'centPrecision',
      currencyCode: 'EUR',
      centAmount: 58500,
      fractionDigits: 2,
    },
    discount: {
      typeId: 'product-discount',
      id: 'db5b107d-c544-4771-9c53-800cb9c37270',
    },
  },
};

export const basicResultData: IPriceData = {
  currencyCode: 'EUR',
  net: 650,
  discounted: 585,
};
