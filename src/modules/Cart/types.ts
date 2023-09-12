import { LineItem, Price } from '@commercetools/platform-sdk';

export interface IPriceItem {
  title: string;
  price?: number;
  address?: string;
}

export interface ICart {
  lineItems: LineItem[];
}

export interface ItemCounterProps {
  price: Price;
  quantity: number;
  id: string;
}

export type SetCount = (value: React.SetStateAction<string>) => void;

export type HandleChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setCount: SetCount
) => void;

export type CountChanger = (
  type: 'inc' | 'dec',
  count: string,
  setCount: SetCount
) => void;
