import { LoaderFunction } from 'react-router-dom';
import fetchCategoriesList from 'pages/CatalogPage/api/fetchCategoriesList';
import store from 'store';
import fetchSingleProductData from 'store/singleProductDataSlice/fetchSingleProductData';
import { ICategoryData } from 'types';
import throwRouteError from '../helpers/throwRouteError';

const checkCatalogPath: LoaderFunction = async ({ params }) => {
  const { dispatch, getState } = store;
  const { category, '*': splat } = params;

  if (!splat) {
    return { ok: true };
  }

  let splatArray = splat.split('/');

  const slug = splatArray[splatArray.length - 1];

  if (slug === '') {
    splatArray = splatArray.slice(0, -1);
  }

  await dispatch(fetchCategoriesList());
  const { loading: fetchingCategories, data: categoriesData } =
    getState().categoriesSlice;

  if (fetchingCategories === 'succeeded' && categoriesData) {
    const findCategory = (
      categorySlug: string | undefined
    ): ICategoryData | undefined =>
      categoriesData.find((item) => item.slug === categorySlug);

    const parentCategory = findCategory(category);

    if (parentCategory) {
      const parentCategoryId = parentCategory.id;

      const mappedSplat = splatArray.map((item, index, array) => {
        const categoryData = findCategory(item);

        const parentId = index
          ? findCategory(array[index - 1])?.id
          : parentCategoryId;

        if (categoryData) {
          const { parent } = categoryData;
          return parent === parentId ? 'category' : null;
        }

        return null;
      });

      const lastMappedElement = mappedSplat[mappedSplat.length - 1];
      if (lastMappedElement) {
        return 'category';
      }

      const nullsArray = mappedSplat.filter((item) => !item);
      const nullElements = nullsArray.length;
      if (nullElements > 1 && lastMappedElement) {
        throwRouteError(404, 'Not Found');
      }

      await dispatch(fetchSingleProductData(slug));
      const { loading, data } = getState().singleProductDataSlice;

      const categoryId =
        splatArray.length > 1
          ? findCategory(splatArray[splatArray.length - 2])?.id
          : parentCategoryId;

      if (loading === 'succeeded' && data) {
        if (categoryId && data.categories.includes(categoryId)) {
          return 'product';
        }
      }

      throwRouteError(404, 'Not Found');
    }
  }

  return { ok: true };
};

export default checkCatalogPath;
