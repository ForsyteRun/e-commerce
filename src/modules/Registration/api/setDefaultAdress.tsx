import apiRoot from '../../../services/sdkClient/apiRoot';
import UpdateCustomerActions from './types';

const setDefaultAdress = (
  customerID: string,
  shippingAdressId?: string,
  billingAdressId?: string
): void => {
  apiRoot
    .customers()
    .withId({ ID: customerID })
    .post({
      body: {
        version: 1,
        actions: [
          {
            action: UpdateCustomerActions.setDefaultShipping,
            addressId: shippingAdressId,
          },
          {
            action: UpdateCustomerActions.setDefaultBilling,
            addressId: billingAdressId,
          },
        ],
      },
    })
    .execute();
};

export default setDefaultAdress;
