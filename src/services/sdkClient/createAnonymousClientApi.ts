import {
  AnonymousAuthMiddlewareOptions,
  ClientBuilder,
  TokenCache,
} from '@commercetools/sdk-client-v2';
import { authMiddlewareOptions, httpMiddlewareOptions } from './constants';
import createTokenCache from './helpers/createTokenCache';
import createApi from './helpers/createApi';

function createAnonymousClientApi() {
  const tokenCache: TokenCache = createTokenCache();

  const options: AnonymousAuthMiddlewareOptions = {
    ...authMiddlewareOptions,
    tokenCache,
  };

  const client = new ClientBuilder()
    .withAnonymousSessionFlow(options)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();

  return createApi(client);
}

export default createAnonymousClientApi;
