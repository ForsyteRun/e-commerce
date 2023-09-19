import { MyCartRemoveLineItemAction } from '@commercetools/platform-sdk';
import store from 'store';
import { updateCart } from 'store/cartSlice/thunks';
import showSnackbarMessage from 'helpers/showSnackbarMessage';

const clearCart = async () => {
  const { dispatch, getState } = store;
  const { data } = getState().cartSlice;

  if (data) {
    const actions: MyCartRemoveLineItemAction[] = data.lineItems.map(
      (item) => ({
        action: 'removeLineItem',
        lineItemId: item.id,
      })
    );

    await dispatch(updateCart(actions));

    const { loading } = getState().cartSlice;

    if (loading === 'succeeded') {
      showSnackbarMessage({
        status: 'success',
        message: 'Products successfully deleted from cart!',
      });
    }

    if (loading === 'failed') {
      showSnackbarMessage({
        status: 'error',
        message: 'Failed to remove products from cart! Please try again.',
      });
    }
  } else {
    showSnackbarMessage({
      status: 'error',
      message: 'Something went wrong... Please try again.',
    });
  }
};

export default clearCart;
