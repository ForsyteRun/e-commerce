import {
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

export const projectKey = 'rsschool_2023q1_ecommerce';

const credentials = {
  clientId: 'STLGCg8raHjUnyFYlUugl6Z0',
  clientSecret: 'Ejc-YxQTa5FbQ8sFiEcZYxQa-McEZYOo',
};

const scopes = [
  'manage_customers:rsschool_2023q1_ecommerce manage_my_orders:rsschool_2023q1_ecommerce manage_discount_codes:rsschool_2023q1_ecommerce view_categories:rsschool_2023q1_ecommerce manage_my_profile:rsschool_2023q1_ecommerce manage_orders:rsschool_2023q1_ecommerce view_products:rsschool_2023q1_ecommerce',
];

const region = `europe-west1.gcp.commercetools.com`;

export const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${region}`,
  projectKey,
  credentials,
  scopes,
};

// Configure httpMiddlewareOptions
export const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.${region}`,
};
