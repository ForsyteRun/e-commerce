import { Price } from '@commercetools/platform-sdk';
import calculatePriceByFraction from 'helpers/calculatePriceByFraction';
import { IPriceData } from 'types';

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
