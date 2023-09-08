import store from 'store';
import {
  createAnonymousUser,
  fetchUserDataByRefreshToken,
} from 'store/userDataSlice/thunks';
import fetchCartData from 'store/cartSlice/fetchCartData';
import { getRefreshTokenCookie } from './processRefreshTokenCookie';

const identificateUserOnAppStart = async () => {
  const { dispatch, getState } = store;
  const { authenticationMode } = getState().userDataSlice.data;
  const refreshToken = getRefreshTokenCookie();

  if (!authenticationMode) {
    if (refreshToken) {
      await dispatch(fetchUserDataByRefreshToken());
    } else {
      await dispatch(createAnonymousUser());
    }

    dispatch(fetchCartData());
  }
};

export default identificateUserOnAppStart;
