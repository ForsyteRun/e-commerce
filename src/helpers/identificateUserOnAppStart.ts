import { AppDispatch } from 'store';
import {
  createAnonymousUser,
  fetchUserDataByRefreshToken,
} from 'store/userDataSlice/thunks';
import { UserType } from 'types';
import { getRefreshTokenCookie } from './processRefreshTokenCookie';

function identificateUserOnAppStart(dispatch: AppDispatch, userType: UserType) {
  const refreshToken = getRefreshTokenCookie();

  if (!userType) {
    if (refreshToken) {
      dispatch(fetchUserDataByRefreshToken(refreshToken));
    } else {
      dispatch(createAnonymousUser());
    }
  }
}

export default identificateUserOnAppStart;
