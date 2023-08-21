import {
  RefreshAuthMiddlewareOptions,
  ClientBuilder,
  TokenCache,
} from '@commercetools/sdk-client-v2';
import { authMiddlewareOptions, httpMiddlewareOptions } from './constants';
import createTokenCache from './helpers/createTokenCache';
import createApi from './helpers/createApi';

function createRefreshTokenClientApi(refreshToken: string) {
  const tokenCache: TokenCache = createTokenCache();

  const options: RefreshAuthMiddlewareOptions = {
    ...authMiddlewareOptions,
    tokenCache,
    refreshToken,
  };

  const client = new ClientBuilder()
    .withRefreshTokenFlow(options)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();

  return createApi(client);
}

export default createRefreshTokenClientApi;
