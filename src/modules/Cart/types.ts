import {
  LineItem,
  DiscountedLineItemPriceForQuantity,
  Price,
} from '@commercetools/platform-sdk';

export interface IPriceItem {
  title: string;
  price?: number;
  discount?: number;
  isDiscounted?: boolean;
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

export interface CartClearModalProps {
  open: boolean;
  onClose: () => void;
}

export enum Answers {
  yes = 'Yes',
  no = 'No',
}

export interface AnswerButtonProps {
  disabled: boolean;
  children: Answers;
  onClick: () => void | Promise<void>;
}
