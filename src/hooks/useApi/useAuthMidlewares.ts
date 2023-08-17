import {
  AnonymousAuthMiddlewareOptions,
  RefreshAuthMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { authMiddlewareOptions } from '../../services/sdkClient/constants';
import useTokenCache from './useTokenCache';
import useRefreshToken from '../useRefreshToken';
import { LoginFormValues } from '../../types';

function useAuthMidlewares() {
  const tokenCache = useTokenCache();
  const { refreshToken } = useRefreshToken();

  const anonymousAuthMiddlewareOptions: AnonymousAuthMiddlewareOptions = {
    ...authMiddlewareOptions,
    tokenCache,
  };

  const refreshAuthMiddlewareOptions: RefreshAuthMiddlewareOptions = {
    ...anonymousAuthMiddlewareOptions,
    refreshToken,
  };

  function getPasswordAuthMiddlewareOptions(
    userData: LoginFormValues
  ): PasswordAuthMiddlewareOptions {
    const credentials = {
      ...anonymousAuthMiddlewareOptions.credentials,
      user: {
        username: userData.email,
        password: userData.password,
      },
    };

    return {
      ...anonymousAuthMiddlewareOptions,
      credentials,
    };
  }

  return {
    anonymousAuthMiddlewareOptions,
    refreshAuthMiddlewareOptions,
    getPasswordAuthMiddlewareOptions,
  };
}

export default useAuthMidlewares;
