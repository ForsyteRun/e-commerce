import { LineItem } from '@commercetools/platform-sdk';

export interface IPriceItem {
  price?: number;
  address?: string;
}

export interface ICart {
  lineItems: LineItem[];
}
