import { Client, ClientBuilder } from '@commercetools/sdk-client-v2';
import useAuthMidlewares from './useAuthMidlewares';
import { LoginFormValues } from '../../types';
import { buildClient } from './helpers';

function useFlowClients() {
  const {
    anonymousAuthMiddlewareOptions,
    refreshAuthMiddlewareOptions,
    getPasswordAuthMiddlewareOptions,
  } = useAuthMidlewares();

  const anonymousFlow = new ClientBuilder().withAnonymousSessionFlow(
    anonymousAuthMiddlewareOptions
  );

  const refreshTokenFlow = new ClientBuilder().withRefreshTokenFlow(
    refreshAuthMiddlewareOptions
  );

  const getPasswordFlow = (userData: LoginFormValues) =>
    new ClientBuilder().withPasswordFlow(
      getPasswordAuthMiddlewareOptions(userData)
    );

  const anonymousClient = buildClient(anonymousFlow);

  const refreshTokenClient = buildClient(refreshTokenFlow);

  function getPasswordFlowClient(userData: LoginFormValues): Client {
    return buildClient(getPasswordFlow(userData));
  }

  return {
    anonymousClient,
    refreshTokenClient,
    getPasswordFlowClient,
  };
}

export default useFlowClients;
