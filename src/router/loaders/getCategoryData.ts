import { LoaderFunction } from 'react-router-dom';
import fetchCategoriesList from 'store/categoriesSlice/fetchCategoriesList';
import store from 'store';
import { throwRouteError } from './helpers';

const getCategoryData: LoaderFunction = async ({ params }) => {
  const { category } = params;
  const { dispatch, getState } = store;

  if (category) {
    await dispatch(fetchCategoriesList()); // get categories list
    const { data, error } = getState().categoriesSlice;

    if (error) {
      throwRouteError(error.statusCode, error.message);
    }

    const categoryData = data?.find((cat) => cat.slug === category); // find category data by slug

    // check if category has a parent then throw router error
    if (categoryData?.parent || !categoryData) {
      throwRouteError(404, 'Not Found');
    }

    return { ok: true };
  }

  return { ok: true };
};

export default getCategoryData;
