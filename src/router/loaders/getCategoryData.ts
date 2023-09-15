import { LoaderFunction } from 'react-router-dom';
import fetchCategoriesList from 'store/categoriesSlice/fetchCategoriesList';
import fetchProductsData from 'store/productsDataSlice/fetchProductsData';
import store from 'store';
import fetchAttributesData from 'store/attributesSlice/fetchAttributesData';
import { resetFilters } from 'store/filtersSlice';
import { throwRouteError } from './helpers';

const getCategoryData: LoaderFunction = async ({ params }) => {
  const { category } = params;
  const { dispatch, getState } = store;

  await dispatch(fetchCategoriesList());
  dispatch(resetFilters());

  const { data, error } = getState().categoriesSlice;

  if (error) {
    throwRouteError(error.statusCode, error.message);
  }

  if (category) {
    const categoryData = data?.find((cat) => cat.slug === category);

    if (categoryData?.parent || !categoryData) {
      throwRouteError(404, 'Not Found');
    }

    if (categoryData) {
      const { id } = categoryData;

      dispatch(fetchProductsData({ categoryId: id }));
      dispatch(fetchAttributesData({ categoryId: id }));
    }
  } else {
    dispatch(fetchProductsData());
    dispatch(fetchAttributesData());
  }

  return { ok: true };
};

export default getCategoryData;
