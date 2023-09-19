import store from 'store';
import fetchSingleProductData from 'store/singleProductDataSlice/fetchSingleProductData';
import { ICategoryData } from 'types';
import getParentId from './getParentId';

const checkProductExists = async (
  splatArray: string[],
  rootCategoryId: string,
  categoriesData: ICategoryData[]
): Promise<boolean> => {
  const { dispatch, getState } = store;
  const lastIndex = splatArray.length - 1;
  const slug = splatArray[lastIndex];
  await dispatch(fetchSingleProductData(slug));
  const { loading, data } = getState().singleProductDataSlice;

  if (loading === 'succeeded' && data) {
    const parentId = getParentId(
      splatArray,
      lastIndex,
      rootCategoryId,
      categoriesData
    );

    if (parentId && data.categories.includes(parentId)) {
      const parentCategory = categoriesData.find(
        (cat) => cat.id === rootCategoryId
      );

      if (parentCategory) {
        const { id, parent } = parentCategory;

        if (id === rootCategoryId && !parent) {
          return true;
        }
      }
    }
  }

  return false;
};

export default checkProductExists;
