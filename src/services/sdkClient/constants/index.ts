import {
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

const {
  VITE_REGION,
  VITE_PROJECT_KEY,
  VITE_CLIENT_ID,
  VITE_CLIENT_SECRET,
  VITE_SCOPES,
} = import.meta.env;

const credentials = {
  clientId: VITE_CLIENT_ID,
  clientSecret: VITE_CLIENT_SECRET,
};
const scopes = [VITE_SCOPES];

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${VITE_REGION}`,
  projectKey: VITE_PROJECT_KEY,
  credentials,
  scopes,
};

export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${VITE_REGION}`,
};
