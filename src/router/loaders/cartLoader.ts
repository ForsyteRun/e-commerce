import store from 'store';
import { fetchCartData } from 'store/cartSlice/thunks';

const cartLoader = () => {
  const { dispatch } = store;

  dispatch(fetchCartData());

  return { ok: true };
};

export default cartLoader;
