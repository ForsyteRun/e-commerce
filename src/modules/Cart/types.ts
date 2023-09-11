import { LineItem } from '@commercetools/platform-sdk';

export interface IPriceItem {
  title: string;
  price?: number;
  address?: string;
}

export interface ICart {
  lineItems: LineItem[];
}