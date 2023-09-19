import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { authMiddlewareOptions, httpMiddlewareOptions } from './constants';
import createApi from './helpers/createApi';

const createCredentialFlow = () => {
  return createApi(
    new ClientBuilder()
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withHttpMiddleware(httpMiddlewareOptions)
      .build()
  );
};

export default createCredentialFlow;
