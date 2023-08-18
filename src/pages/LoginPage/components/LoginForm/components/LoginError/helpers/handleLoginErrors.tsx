import { _ErrorResponse } from '@commercetools/platform-sdk';
import { setLoginError } from '../../../../../../../store/userSlice';
import { AppDispatch, RequestStatusCode } from '../../../../../../../types';
import ERROR_MESSAGES from '../constants';

function handleLoginError(error: _ErrorResponse, dispatch: AppDispatch) {
  if (error.message === ERROR_MESSAGES.ACCOUNT_NOT_FOUND) {
    dispatch(setLoginError(error.message));
  } else if (error.statusCode === RequestStatusCode.BadRequest) {
    dispatch(setLoginError(ERROR_MESSAGES.BAD_REQUEST));
  } else {
    dispatch(setLoginError(ERROR_MESSAGES.GENERIC));
  }
}

export default handleLoginError;
