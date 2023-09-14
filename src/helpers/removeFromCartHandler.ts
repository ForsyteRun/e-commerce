import { MyCartRemoveLineItemAction } from '@commercetools/platform-sdk';
import store from 'store';
import { updateCart } from 'store/cartSlice/thunks';
import showSnackbarMessage from './showSnackbarMessage';

const removeFromCartHandler = async (productId: string): Promise<void> => {
  const { dispatch, getState } = store;
  const { data } = getState().cartSlice;
  const lineItem = data?.lineItems.find((item) => item.productId === productId);
  const { id: lineItemId } = lineItem!;
  const action: MyCartRemoveLineItemAction = {
    action: 'removeLineItem',
    lineItemId,
  };

  await dispatch(updateCart(action));

  const { loading } = getState().cartSlice;

  if (loading === 'succeeded') {
    showSnackbarMessage({
      status: 'success',
      message: 'Product was removed from cart!',
    });
  }

  if (loading === 'failed') {
    showSnackbarMessage({
      status: 'error',
      message: 'Failed to remove product from cart! Please, try again.',
    });
  }
};

export default removeFromCartHandler;
