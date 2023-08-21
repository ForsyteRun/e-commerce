import {
  ClientBuilder,
  PasswordAuthMiddlewareOptions,
  TokenCache,
} from '@commercetools/sdk-client-v2';
import { authMiddlewareOptions, httpMiddlewareOptions } from './constants';
import { LoginFormValues } from '../../types';
import createTokenCache from './helpers/createTokenCache';
import createApi from './helpers/createApi';

function createPasswordFlowClientApi(userData: LoginFormValues) {
  const tokenCache: TokenCache = createTokenCache();

  const options: PasswordAuthMiddlewareOptions = {
    ...authMiddlewareOptions,
    credentials: {
      ...authMiddlewareOptions.credentials,
      user: {
        username: userData.email,
        password: userData.password,
      },
    },
    tokenCache,
  };

  const client = new ClientBuilder()
    .withPasswordFlow(options)
    .withHttpMiddleware(httpMiddlewareOptions)
    .build();

  return createApi(client);
}

export default createPasswordFlowClientApi;
