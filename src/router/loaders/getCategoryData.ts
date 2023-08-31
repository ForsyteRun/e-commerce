import { LoaderFunction } from 'react-router-dom';
import fetchCategoriesList from 'store/categoriesSlice/fetchCategoriesList';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import store from 'store';
import { throwRouteError } from './helpers';

const getCategoryData: LoaderFunction = async ({ params }) => {
  const { category } = params;
  const { dispatch, getState } = store;

  if (category) {
    await dispatch(fetchCategoriesList());
    const { data, error } = getState().categoriesSlice;

    if (error) {
      throwRouteError(error.statusCode, error.message);
    }

    const categoryData = data?.find((cat) => cat.slug === category);

    if (categoryData?.parent || !categoryData) {
      throwRouteError(404, 'Not Found');
    }

    if (categoryData) {
      const { id } = categoryData;

      dispatch(fetchProductsData({ categoryId: id }));
    }
  } else {
    dispatch(fetchProductsData());
  }

  return { ok: true };
};

export default getCategoryData;
