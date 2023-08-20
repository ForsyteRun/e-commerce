import { CustomerUpdateAction } from '@commercetools/platform-sdk';
import apiRoot from '../../../services/sdkClient/apiRoot';

const addCustomerAdress = (
  customerId: string,
  actions: CustomerUpdateAction[]
): void => {
  apiRoot
    .customers()
    .withId({ ID: customerId })
    .post({
      body: {
        version: 1,
        actions,
      },
    })
    .execute();
};

export default addCustomerAdress;
