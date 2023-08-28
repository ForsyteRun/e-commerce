import { LoaderFunction } from 'react-router-dom';
import fetchCategoriesList from 'pages/CatalogPage/api/fetchCategoriesList';
import store from 'store';
import { findDataItemBySlug } from 'helpers';
import { throwRouteError, mapSplatArray, checkProductExists } from './helpers';

const checkCatalogPath: LoaderFunction = async ({ params }) => {
  const { dispatch, getState } = store;
  const { category, '*': splat } = params;

  if (!splat) {
    return { ok: true };
  }

  let splatArray = splat.split('/');

  if (splatArray[splatArray.length - 1] === '') {
    splatArray = splatArray.slice(0, -1);
  }

  await dispatch(fetchCategoriesList());
  const { loading: fetchingCategories, data: categoriesData } =
    getState().categoriesSlice;

  if (fetchingCategories === 'succeeded' && categoriesData) {
    const rootCategory = findDataItemBySlug(categoriesData, category);

    if (rootCategory) {
      const rootId = rootCategory.id;

      const mappedSplat = mapSplatArray(splatArray, categoriesData, rootId);

      const lastMappedElement = mappedSplat[mappedSplat.length - 1];

      if (lastMappedElement) {
        return 'category';
      }

      const nullsArray = mappedSplat.filter((item) => !item);
      const nullElements = nullsArray.length;

      if (nullElements > 1) {
        throwRouteError(404, 'Not Found');
      }

      const isProductExists = await checkProductExists(
        splatArray,
        rootId,
        categoriesData
      );

      if (isProductExists) {
        return 'product';
      }

      throwRouteError(404, 'Not Found');
    }
  }

  return { ok: true };
};

export default checkCatalogPath;
