import {
  DiscountedLineItemPriceForQuantity,
  Price,
} from '@commercetools/platform-sdk';

export type ModifyTypesPrice = Omit<
  DiscountedLineItemPriceForQuantity,
  'quantity'
> &
  Price;
