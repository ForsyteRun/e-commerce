import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import ctpClient, { anonymousClient } from './BuildClient';

// Create apiRoot from the imported ClientBuilder and include your Project key
const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: import.meta.env.VITE_PROJECT_KEY,
});

export const anonymousApi = createApiBuilderFromCtpClient(
  anonymousClient
).withProjectKey({
  projectKey: import.meta.env.VITE_PROJECT_KEY,
});

export default apiRoot;
