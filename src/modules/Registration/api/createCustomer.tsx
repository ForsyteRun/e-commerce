/* eslint-disable no-console */
import {
  ClientResponse,
  CustomerDraft,
  CustomerSignInResult,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import apiRoot from '../../../services/sdkClient/apiRoot';
import { getRegistrationAccessCode } from '../../../store/registration/registrationAccess';
import { AppDispatch, RequestStatusCode } from '../../../types';

const createCustomer = (data: CustomerDraft, dispatch: AppDispatch): void => {
  apiRoot
    .customers()
    .post({
      body: data,
    })
    .execute()
    .then((res: ClientResponse<CustomerSignInResult>) => {
      dispatch(getRegistrationAccessCode(RequestStatusCode.Created));
      console.log(res);
    })
    .catch((error: _ErrorResponse) => {
      const { statusCode } = error;

      if (statusCode === RequestStatusCode.BadRequest) {
        dispatch(getRegistrationAccessCode(RequestStatusCode.BadRequest));
      } else if (statusCode === RequestStatusCode.Unauthorized) {
        dispatch(getRegistrationAccessCode(RequestStatusCode.Unauthorized));
      } else if (statusCode === RequestStatusCode.InternalServerError) {
        dispatch(
          getRegistrationAccessCode(RequestStatusCode.InternalServerError)
        );
      }
    });
};

export default createCustomer;
