import { Cart } from '@commercetools/platform-sdk';
import { ICartData } from 'types';

const getCartData = ({
  id,
  version,
  lineItems,
  totalPrice,
}: Cart): ICartData => {
  return {
    id,
    version,
    lineItems,
    totalPrice,
  };
};

export default getCartData;
