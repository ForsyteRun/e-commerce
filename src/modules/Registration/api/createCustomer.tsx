// import {
//   ClientResponse,
//   CustomerDraft,
//   CustomerSignInResult,
//   _ErrorResponse,
// } from '@commercetools/platform-sdk';
// import apiRoot from '../../../services/sdkClient/apiRoot';
// import { RequestStatusCode } from '../../../types';

// const createCustomer = (data: CustomerDraft): void => {
//   apiRoot
//     .customers()
//     .post({
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: data,
//     })
//     .execute()
//     .then((res: ClientResponse<CustomerSignInResult>) =>
//       // eslint-disable-next-line no-alert
//       alert(`Created ${res}`)
//     )
//     .catch((error: _ErrorResponse) => {
//       if (error.statusCode === RequestStatusCode.BadRequest) {
//       }
//     });
// };

// export default createCustomer;