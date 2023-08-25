import { _ErrorResponse } from '@commercetools/platform-sdk';
import ERROR_MESSAGES from 'pages/LoginPage/components/LoginForm/components/LoginError/constants';
import { RequestStatusCode } from 'types';

const handleLoginError = (error: _ErrorResponse): string => {
  if (error.message === ERROR_MESSAGES.ACCOUNT_NOT_FOUND) {
    return error.message;
  }

  if (error.statusCode === RequestStatusCode.BadRequest) {
    return ERROR_MESSAGES.BAD_REQUEST;
  }

  return '';
};

export default handleLoginError;
