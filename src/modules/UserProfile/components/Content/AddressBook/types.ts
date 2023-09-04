import { BaseAddress } from '@commercetools/platform-sdk';

export enum AddressEnum {
  billing = 'Billing address',
  shipping = 'Shipping address',
}

export interface IAddressBlock {
  title: AddressEnum;
  defaultAddress: boolean;
  cardIndex: number;
  allAddress: BaseAddress;
}
