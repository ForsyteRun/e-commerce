import { ClientBuilder } from '@commercetools/sdk-client-v2';
import {
  authMiddlewareOptions,
  httpMiddlewareOptions,
  anonymousAuthMiddlewareOptions,
} from './constants';

// Export the ClientBuilder
const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

export const anonymousClient = new ClientBuilder()
  .withAnonymousSessionFlow(anonymousAuthMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

export default ctpClient;
