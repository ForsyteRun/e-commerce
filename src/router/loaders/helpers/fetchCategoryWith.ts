import { _ErrorResponse } from '@commercetools/platform-sdk';
import { ByProjectKeyCategoriesByIDRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/categories/by-project-key-categories-by-id-request-builder';
import { ByProjectKeyCategoriesKeyByKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/categories/by-project-key-categories-key-by-key-request-builder';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const fetchCategoryWith = async (type: 'id' | 'key', value: string) => {
  const api = createRefreshTokenClientApi();

  let builder:
    | ByProjectKeyCategoriesByIDRequestBuilder
    | ByProjectKeyCategoriesKeyByKeyRequestBuilder;

  if (type === 'id') {
    builder = api.categories().withId({ ID: value });
  } else {
    builder = api.categories().withKey({ key: value });
  }

  const response = await builder
    .get()
    .execute()
    .then((res) => res)
    .catch((err: _ErrorResponse) => err);

  return response;
};

export default fetchCategoryWith;
