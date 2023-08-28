import { LoaderFunction } from 'react-router-dom';
import throwRouteError from '../helpers/throwRouteError';
import fetchCategoryWith from './fetchCategoryWith';

const getCategoryData: LoaderFunction = async ({ params }) => {
  if (params.category) {
    const response = await fetchCategoryWith('key', params.category);

    if (response && response.statusCode === 404) {
      throwRouteError(404, 'Not found');
    }

    return response;
  }

  return { ok: true };
};

export default getCategoryData;
