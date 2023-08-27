import { _ErrorResponse } from '@commercetools/platform-sdk';
import { LoaderFunction } from 'react-router-dom';
import createRefreshTokenClientApi from 'services/sdkClient/createRefreshTokenClientApi';

const getCategoryData: LoaderFunction = async ({ params }) => {
  const api = createRefreshTokenClientApi();
  if (params.category) {
    const response = await api
      .categories()
      .withKey({ key: params.category })
      .get()
      .execute()
      .then((res) => res)
      .catch((err: _ErrorResponse) => err);

    if (response && response.statusCode === 404) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw new Response('Not Found', {
        statusText: 'Not Found',
        status: response.statusCode,
      });
    }

    return response;
  }

  return { ok: true };
};

export default getCategoryData;
