import type {
  ClientResponse,
  CustomerSignInResult,
} from '@commercetools/platform-sdk';
import { buildApi } from './helpers';
import { LoginFormValues } from '../../types';
import useFlowClients from './useAuthFlowClients';

function useApi() {
  const { anonymousClient, refreshTokenClient, getPasswordFlowClient } =
    useFlowClients();

  return {
    anonymousApi: buildApi(anonymousClient),
    refreshTokenApi: buildApi(refreshTokenClient),
    logInUser(
      userData: LoginFormValues
    ): Promise<ClientResponse<CustomerSignInResult>> {
      const passwordFlowApi = buildApi(getPasswordFlowClient(userData));
      const args = { body: userData };
      return passwordFlowApi.login().post(args).execute();
    },
  };
}

export default useApi;
