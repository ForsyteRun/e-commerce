import { TypedMoney } from '@commercetools/platform-sdk';

export interface IPriceProps {
  price: TypedMoney;
  quantity: number;
}

export interface INetPriceProps extends IPriceProps {
  isDiscounted: boolean;
}
