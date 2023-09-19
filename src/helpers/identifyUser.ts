import store from 'store';
import { createAnonymousCart, fetchCartOnStart } from 'store/cartSlice/thunks';
import { getRefreshTokenCookie } from './processRefreshTokenCookie';

const identifyUser = () => {
  const { dispatch } = store;
  const refreshToken = getRefreshTokenCookie();

  const callback = refreshToken ? fetchCartOnStart : createAnonymousCart;

  dispatch(callback());
};

export default identifyUser;
