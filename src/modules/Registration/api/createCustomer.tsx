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
      console.log(res, actions);

      // addCustomerAdress(res, setAdress);
      // dispatch(getRegistrationAccessCode(RequestStatusCode.Created));
      // const setAction: CustomerUpdateAction[] = [
      //   {
      //     action: UpdateCustomerActions.addShippingAddress,
      //     addressId: res.body.customer.addresses[0].id,
      //   },
      //   {
      //     action: UpdateCustomerActions.addBillingAddress,
      //     addressId: res.body.customer.addresses[1].id,
      //   },
      //   {
      //     action: UpdateCustomerActions.setDefaultShipping,
      //     addressId: res.body.customer.addresses[0].id,
      //   },
      // ];

      // addAdress(res.body.customer.id, setAction);
      // if (setAdress.isSameBillingFieldAsShipping) {
      //   if (setAdress.defaulShippingAdress) {
      //     const setAction: CustomerUpdateAction[] = [
      //       {
      //         action: UpdateCustomerActions.addShippingAddress,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.addBillingAddress,
      //         addressId: res.body.customer.addresses[1].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.setDefaultShipping,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //     ];

      //     addAdress(res.body.customer.id, setAction);
      //     dispatch(getRegistrationAccessCode(RequestStatusCode.Created));
      //   } else {
      //     const setAction: CustomerUpdateAction[] = [
      //       {
      //         action: UpdateCustomerActions.addShippingAddress,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.addBillingAddress,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //     ];

      //     addAdress(res.body.customer.id, setAction);
      //   }
      // } else {
      //   // eslint-disable-next-line no-lonely-if
      //   if (setAdress.defaultBillingAdress && setAdress.defaulShippingAdress) {
      //     const setAction: CustomerUpdateAction[] = [
      //       {
      //         action: UpdateCustomerActions.addShippingAddress,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.addBillingAddress,
      //         addressId: res.body.customer.addresses[1].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.setDefaultShipping,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.setDefaultBilling,
      //         addressId: res.body.customer.addresses[1].id,
      //       },
      //     ];
      //     addAdress(res.body.customer.id, setAction);
      //   } else if (setAdress.defaultBillingAdress) {
      //     const setAction: CustomerUpdateAction[] = [
      //       {
      //         action: UpdateCustomerActions.addShippingAddress,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.addBillingAddress,
      //         addressId: res.body.customer.addresses[1].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.setDefaultBilling,
      //         addressId: res.body.customer.addresses[1].id,
      //       },
      //     ];
      //     addAdress(res.body.customer.id, setAction);
      //   } else if (setAdress.defaulShippingAdress) {
      //     const setAction: CustomerUpdateAction[] = [
      //       {
      //         action: UpdateCustomerActions.addShippingAddress,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.addBillingAddress,
      //         addressId: res.body.customer.addresses[1].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.setDefaultShipping,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //     ];
      //     addAdress(res.body.customer.id, setAction);
      //   } else {
      //     const setAction: CustomerUpdateAction[] = [
      //       {
      //         action: UpdateCustomerActions.addShippingAddress,
      //         addressId: res.body.customer.addresses[0].id,
      //       },
      //       {
      //         action: UpdateCustomerActions.addBillingAddress,
      //         addressId: res.body.customer.addresses[1].id,
      //       },
      //     ];
      //     addAdress(res.body.customer.id, setAction);
      //   }

      //   // if (
      //   //   defaultAdress.defaulShippingtAdress &&
      //   //   defaultAdress.defaultBillingAdress
      //   // ) {
      //   //   setDefaultAdress(
      //   //     res.body.customer.id,
      //   //     res.body.customer.addresses[0].id as string,
      //   //     res.body.customer.addresses[1].id as string
      //   //   );
      //   // } else if (defaultAdress.defaulShippingtAdress) {
      //   //   setDefaultAdress(
      //   //     res.body.customer.id,
      //   //     res.body.customer.addresses[0].id as string,
      //   //     res.body.customer.addresses[1].id as string
      //   //   );
      //   // } else if (defaultAdress.defaultBillingAdress) {
      //   //   setDefaultAdress(
      //   //     res.body.customer.id,
      //   //     res.body.customer.addresses[0].id as string,
      //   //     res.body.customer.addresses[1].id as string
      //   //   );
      //   // } else if (defaultAdress.isSameBillingFieldAsShipping) {
      //   //   setDefaultAdress(
      //   //     res.body.customer.id,
      //   //     res.body.customer.addresses[0].id as string,
      //   //     res.body.customer.addresses[1].id as string
      //   //   );
      //   // }
      // }
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
