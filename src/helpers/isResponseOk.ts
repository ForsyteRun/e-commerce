import { ClientResponse, _ErrorResponse } from '@commercetools/platform-sdk';

const isResponseOk = <T>(
  response: ClientResponse<T> | _ErrorResponse
): response is ClientResponse<T> => {
  return response.statusCode === 200;
};

export default isResponseOk;
