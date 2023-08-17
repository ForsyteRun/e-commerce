import { Client, ClientBuilder } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';
import { httpMiddlewareOptions } from '../../../services/sdkClient/constants';

export const buildApi = (client: Client): ByProjectKeyRequestBuilder =>
  createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey: import.meta.env.VITE_PROJECT_KEY,
  });

export const buildClient = (flow: ClientBuilder): Client =>
  flow.withHttpMiddleware(httpMiddlewareOptions).build();
