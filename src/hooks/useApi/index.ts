import { buildApi } from './helpers';
import { LoginFormValues } from '../../types';
import useFlowClients from './useAuthFlowClients';

function useApi() {
  const { anonymousClient, refreshTokenClient, getPasswordFlowClient } =
    useFlowClients();

  return {
    anonymousApi: buildApi(anonymousClient),
    refreshTokenApi: buildApi(refreshTokenClient),
    logInUser(userData: LoginFormValues): void {
      const passwordFlowApi = buildApi(getPasswordFlowClient(userData));
      const args = { body: userData };
      passwordFlowApi.login().post(args).execute();
    },
  };
}

export default useApi;
