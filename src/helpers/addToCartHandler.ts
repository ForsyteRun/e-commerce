import { MyCartAddLineItemAction } from '@commercetools/platform-sdk';
import store from 'store';
import { updateCart } from 'store/cartSlice/thunks';
import showSnackbarMessage from './showSnackbarMessage';

const addToCartHandler = async (productId: string): Promise<void> => {
  const { dispatch, getState } = store;
  const action: MyCartAddLineItemAction = {
    action: 'addLineItem',
    productId,
  };

  await dispatch(updateCart(action));

  const updateCartResult = getState().cartSlice.loading;

  if (updateCartResult === 'succeeded') {
    showSnackbarMessage({
      status: 'success',
      message: 'Product was added to cart!',
    });
  }

  if (updateCartResult === 'failed') {
    showSnackbarMessage({
      status: 'error',
      message: 'Failed to add product to cart! Please, try again.',
    });
  }
};

export default addToCartHandler;
