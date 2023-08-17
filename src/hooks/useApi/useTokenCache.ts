import { TokenCache } from '@commercetools/sdk-client-v2';
import { useAppDispatch, useAppSelector } from '../useRedux';
import { setTokenStore } from '../../store/tokenStoreSlice';
import useRefreshToken from '../useRefreshToken';

function useTokenCache(): TokenCache {
  const tokenStore = useAppSelector((state) => state.tokenStoreSlice);
  const dispatch = useAppDispatch();
  const { updateRefreshToken } = useRefreshToken();

  return {
    get: () => tokenStore,
    set: (cache) => {
      dispatch(setTokenStore(cache));
      if (cache.refreshToken) {
        updateRefreshToken(cache.refreshToken);
      }
    },
  };
}

export default useTokenCache;
