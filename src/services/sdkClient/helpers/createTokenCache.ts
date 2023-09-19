import { TokenCache, TokenStore } from '@commercetools/sdk-client-v2';
import { updateRefreshTokenCookie } from '../../../helpers/processRefreshTokenCookie';

const createTokenCache = (): TokenCache => {
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

  return tokenCache;
};

export default createTokenCache;
