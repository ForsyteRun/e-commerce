import {
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${import.meta.env.VITE_REGION}`,
  projectKey: import.meta.env.VITE_PROJECT_KEY,
  credentials: {
    clientId: import.meta.env.VITE_CLIENT_ID,
    clientSecret: import.meta.env.VITE_CLIENT_SECRET,
  },
  oauthUri: `/oauth/${import.meta.env.VITE_PROJECT_KEY}/anonymous/token`,
  scopes: [import.meta.env.SCOPES],
};

// Configure httpMiddlewareOptions
export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${import.meta.env.VITE_REGION}`,
};
