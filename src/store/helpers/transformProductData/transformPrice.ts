import { Price } from '@commercetools/platform-sdk';
import { IPriceData } from 'types';
import calculatePriceByFraction from './calculatePriceByFraction';

const transformPrice = (priceData: Price): IPriceData => {
  const { currencyCode } = priceData.value;
  const price: IPriceData = {
    currencyCode,
    net: calculatePriceByFraction(priceData.value),
  };

  if (priceData.discounted) {
    price.discounted = calculatePriceByFraction(priceData.discounted.value);
  }

  return price;
};

export default transformPrice;
