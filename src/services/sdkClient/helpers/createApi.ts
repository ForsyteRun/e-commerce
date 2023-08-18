import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { Client } from '@commercetools/sdk-client-v2';

function createApi(client: Client) {
  const api = createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey: import.meta.env.VITE_PROJECT_KEY,
  });

  return api;
}

export default createApi;
