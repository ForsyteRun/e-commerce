import {
  Address,
  ClientResponse,
  CustomerDraft,
  CustomerSignInResult,
  _ErrorResponse,
} from '@commercetools/platform-sdk';
import apiRoot from '../../../services/sdkClient/apiRoot';
import { getRegistrationAccessCode } from '../../../store/registration/registrationAccess.slice';
import { AppDispatch, RequestStatusCode } from '../../../types';
import { IDefaultAdress } from '../components/registration/types';
import getUpdateAction from './helpers.ts/getUpdateAction';
import addCustomerAdress from './addAdress';

const createCustomer = (
  data: CustomerDraft,
  setAdress: IDefaultAdress,
  dispatch: AppDispatch
): void => {
  let splitData;
  if (setAdress.isSameBillingFieldAsShipping) {
    splitData = data.addresses?.filter((el: Address) => el.city !== '');
  } else {
    splitData = data.addresses;
  }

  const updatedData = {
    ...data,
    addresses: splitData,
  };

  apiRoot
    .customers()
    .post({
      body: updatedData,
    })
    .execute()
    .then((res: ClientResponse<CustomerSignInResult>) => {
      const actions = getUpdateAction(res.body, setAdress);

      addCustomerAdress(res.body.customer.id, actions);
      dispatch(getRegistrationAccessCode(RequestStatusCode.Created));
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
