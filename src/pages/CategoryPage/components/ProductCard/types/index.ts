import { IAttributes } from 'types';

export type PriceType = 'net' | 'discounted';

export interface IProductPrice {
  price: number;
  type: PriceType;
  isDiscountedNet?: boolean;
}

export interface IProductImage {
  url: string | undefined;
  name: string;
}

export interface IProductCardContent {
  attributes: IAttributes | undefined;
  sku: string | undefined;
  name: string;
}
