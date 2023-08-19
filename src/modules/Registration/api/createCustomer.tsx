import {
  ClientResponse,
  CustomerDraft,
  CustomerSignInResult,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import apiRoot from '../../../services/sdkClient/apiRoot';
import { getRegistrationAccessCode } from '../../../store/registration/registrationAccess.slice';
import { AppDispatch, RequestStatusCode } from '../../../types';
// eslint-disable-next-line import/no-cycle
import { IDefaultAdress } from '../components/registration/registration';
import setDefaultAdress from './setDefaultAdress';

const createCustomer = (
  data: CustomerDraft,
  defaultAdress: IDefaultAdress,
  dispatch: AppDispatch
): void => {
  apiRoot
    .customers()
    .post({
      body: data,
    })
    .execute()
    .then((res: ClientResponse<CustomerSignInResult>) => {
      dispatch(getRegistrationAccessCode(RequestStatusCode.Created));

      if (
        defaultAdress.defaulShippingtAdress &&
        defaultAdress.defaultBillingAdress
      ) {
        setDefaultAdress(
          res.body.customer.id,
          res.body.customer.addresses[0].id,
          res.body.customer.addresses[1].id
        );
      } else if (defaultAdress.defaulShippingtAdress) {
        setDefaultAdress(
          res.body.customer.id,
          res.body.customer.addresses[0].id,
          undefined
        );
      } else if (defaultAdress.defaultBillingAdress) {
        setDefaultAdress(
          res.body.customer.id,
          undefined,
          res.body.customer.addresses[1].id
        );
      }
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
