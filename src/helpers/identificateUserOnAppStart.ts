import { AuthenticationMode } from '@commercetools/platform-sdk';
import { AppDispatch } from 'store';
import {
  createAnonymousUser,
  fetchUserDataByRefreshToken,
} from 'store/userDataSlice/thunks';
import { getRefreshTokenCookie } from './processRefreshTokenCookie';

function identificateUserOnAppStart(
  dispatch: AppDispatch,
  authenticationMode: AuthenticationMode
) {
  const refreshToken = getRefreshTokenCookie();

  if (!authenticationMode) {
    if (refreshToken) {
      dispatch(fetchUserDataByRefreshToken(refreshToken));
    } else {
      dispatch(createAnonymousUser());
    }
  }
}

export default identificateUserOnAppStart;
