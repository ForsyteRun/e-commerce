import { LoaderFunction, redirect } from 'react-router-dom';
import fetchSingleProductData from 'store/singleProductDataSlice/fetchSingleProductData';
import store from 'store';
import isResponseOk from 'helpers/isResponseOk';
import { PathNames } from 'types';
import throwRouteError from '../helpers/throwRouteError';
import fetchCategoryWith from './fetchCategory';

const getProductData: LoaderFunction = async ({ params }) => {
  const { dispatch, getState } = store;
  const { category, product } = params;

  if (category && product) {
    await dispatch(fetchSingleProductData(product));

    const { data, error, loading } = getState().singleProductDataSlice;

    if (data && loading === 'succeeded') {
      const categoryData = await fetchCategoryWith('key', category);

      if (
        isResponseOk(categoryData) &&
        categoryData.body.id !== data.categories[0]
      ) {
        const newCategory = await fetchCategoryWith('id', data.categories[0]);

        if (isResponseOk(newCategory)) {
          const path = `${PathNames.catalog}/${newCategory.body.key}/${data.slug}`;

          return redirect(path);
        }
      }
    }

    if (error) {
      throwRouteError(error.statusCode, error.message);
    }
  }

  return { ok: true };
};

export default getProductData;
