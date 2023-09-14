import {
  LineItem,
  DiscountedLineItemPriceForQuantity,
  Price,
} from '@commercetools/platform-sdk';

export interface IPriceItem {
  title: string;
  price?: number;
  discount?: number;
}

export interface ICart {
  lineItems: LineItem[];
}

export type ModifyPriceType = Omit<
  DiscountedLineItemPriceForQuantity,
  'quantity'
> &
  Price;

export interface ICommonDiscount {
  price: number;
  discountPrice: number;
}
