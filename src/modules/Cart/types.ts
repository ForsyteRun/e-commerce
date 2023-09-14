import { LineItem } from '@commercetools/platform-sdk';

export interface IPriceItem {
  title: string;
  price?: number;
  address?: string;
}

export interface ICart {
  lineItems: LineItem[];
}

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
