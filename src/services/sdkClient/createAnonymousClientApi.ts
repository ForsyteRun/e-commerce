import {
  AnonymousAuthMiddlewareOptions,
  ClientBuilder,
  TokenCache,
  TokenStore,
} from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { authMiddlewareOptions, httpMiddlewareOptions } from './constants';
import { updateRefreshTokenCookie } from '../../helpers/processRefreshTokenCookie';

function createAnonymousClientApi() {
  const tokenStore: TokenStore = {
    token: '',
    expirationTime: 0,
    refreshToken: '',
  };

  const tokenCache: TokenCache = {
    get: () => tokenStore,
    set: (cache) => {
      tokenStore.token = cache.token;
      tokenStore.expirationTime = cache.expirationTime;
      tokenStore.refreshToken = cache.refreshToken;
      if (cache.refreshToken) {
        updateRefreshTokenCookie(cache.refreshToken);
      }
    },
  };

  const options: AnonymousAuthMiddlewareOptions = {
    ...authMiddlewareOptions,
    tokenCache,
  };

  const client = new ClientBuilder()
    .withAnonymousSessionFlow(options)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();

  const api = createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey: import.meta.env.VITE_PROJECT_KEY,
  });

  return api;
}

export default createAnonymousClientApi;
