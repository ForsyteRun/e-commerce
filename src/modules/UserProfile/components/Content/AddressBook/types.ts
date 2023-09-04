import { BaseAddress } from '@commercetools/platform-sdk';

export enum AddressEnum {
  billing = 'Billing address',
  shipping = 'Shipping address',
}

export interface IAddressBlock {
  defaultAddress: boolean;
  cardIndex: number;
  allAddress: BaseAddress;
  defaultShippingAddress: boolean;
  setDefaultShippingAddress: (value: boolean) => void;
  setCardId: (value: number | null) => void;
}
