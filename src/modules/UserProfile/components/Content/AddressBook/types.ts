import { BaseAddress } from '@commercetools/platform-sdk';
import { Dispatch, SetStateAction } from 'react';

export enum AddressEnum {
  billing = 'Billing address',
  shipping = 'Shipping address',
}

export interface IAddressBlock {
  title: AddressEnum;
  address: BaseAddress;
  billing: boolean;
  defaultAddress: boolean;
  indexModify: number | null;
  setIndexModify: Dispatch<SetStateAction<number | null>>;
  setBilling: Dispatch<SetStateAction<boolean>>;
}
