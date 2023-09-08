import { MyCartAddLineItemAction } from '@commercetools/platform-sdk';
import store from 'store';
import updateCart from 'store/cartSlice/updateCart';

const addToCartHandler = (productId: string): void => {
  const { dispatch } = store;
  const action: MyCartAddLineItemAction = {
    action: 'addLineItem',
    productId,
  };
  dispatch(updateCart(action));
};

export default addToCartHandler;
