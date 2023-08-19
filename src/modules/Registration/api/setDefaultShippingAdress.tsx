import apiRoot from '../../../services/sdkClient/apiRoot';
import UpdateCustomerActions from './types';

const setDefaultShippingAdress = (customerID: string, type: string): void => {
  apiRoot
    .customers()
    .withId({ ID: customerID })
    .post({
      body: {
        version: 1,
        actions: [
          {
            action: UpdateCustomerActions.setDefaultShipping,
            addressId: type,
          },
        ],
      },
    })
    .execute();
};

export default setDefaultShippingAdress;
