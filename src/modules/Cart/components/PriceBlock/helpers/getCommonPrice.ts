import { LineItem } from '@commercetools/platform-sdk';
import { calculatePriceByFraction } from 'helpers';
import { ICommonDiscount } from 'modules/Cart/types';
import { ICartData } from 'types';

const getCommonPrice = (data: ICartData): ICommonDiscount[] => {
  const { lineItems } = data;

  let arr: ICommonDiscount[] = [];

  lineItems.forEach((value: LineItem) => {
    const { price, discountedPricePerQuantity, quantity } = value;

    const result: ICommonDiscount = {
      price: 0,
      discountPrice: 0,
    };

    if (price.discounted) {
      result.discountPrice =
        (calculatePriceByFraction(price.value) -
          calculatePriceByFraction(price.discounted.value)) *
        quantity;
    } else if (discountedPricePerQuantity.length > 0) {
      result.discountPrice =
        (calculatePriceByFraction(price.value) -
          calculatePriceByFraction(
            discountedPricePerQuantity[0].discountedPrice.value
          )) *
        discountedPricePerQuantity[0].quantity;
    }
    result.price = calculatePriceByFraction(price.value) * quantity;
    arr = [...arr, result];
  });

  return arr;
};
export default getCommonPrice;
