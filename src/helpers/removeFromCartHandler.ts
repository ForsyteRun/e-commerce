import { MyCartRemoveLineItemAction } from '@commercetools/platform-sdk';
import store from 'store';
import { updateCart } from 'store/cartSlice/thunks';

const removeFromCartHandler = (productId: string): void => {
  const { dispatch, getState } = store;
  const { data } = getState().cartSlice;
  const lineItem = data?.lineItems.find((item) => item.productId === productId);
  const { id: lineItemId } = lineItem!;
  const action: MyCartRemoveLineItemAction = {
    action: 'removeLineItem',
    lineItemId,
  };
  dispatch(updateCart(action));
};

export default removeFromCartHandler;
