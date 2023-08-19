// import { ClientResponse } from '@commercetools/sdk-client-v2';
// import {
//   CustomerSignInResult,
//   CustomerUpdateAction,
// } from '@commercetools/platform-sdk';
// import apiRoot from '../../../services/sdkClient/apiRoot';
// import { IDefaultAdress } from '../components/registration/types';
// import getUpdateAction from './helpers.ts/getUpdateAction';

// const addCustomerAdress = (
//   customerInfo: ClientResponse<CustomerSignInResult>,
//   setAdress: IDefaultAdress
// ): void => {
//   const data = getUpdateAction(customerInfo, setAdress);
//   console.log(data);

//   apiRoot
//     .customers()
//     .withId({ ID: customer && (customer.id as string) })
//     .post({
//       body: {
//         version: 1,
//         actions: data as CustomerUpdateAction[],
//       },
//     })
//     .execute();
// };

// export default addCustomerAdress;
