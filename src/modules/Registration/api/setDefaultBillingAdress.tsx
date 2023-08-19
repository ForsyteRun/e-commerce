import apiRoot from '../../../services/sdkClient/apiRoot';
import UpdateCustomerActions from './types';

const setDefaultBillingAdress = (customerID: string, type: string): void => {
  apiRoot
    .customers()
    .withId({ ID: customerID })
    .post({
      body: {
        version: 1,
        actions: [
          {
            action: UpdateCustomerActions.setDefaultBilling,
            addressId: type,
          },
        ],
      },
    })
    .execute();
};

export default setDefaultBillingAdress;
