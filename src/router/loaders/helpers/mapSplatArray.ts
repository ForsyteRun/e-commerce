import findDataItemBySlug from 'helpers/findDataItemBySlug';
import { ICategoryData } from 'types';
import getParentId from './getParentId';

const mapSplatArray = (
  array: string[],
  categoriesData: ICategoryData[],
  rootCategoryId: string
): ('category' | null)[] => {
  return array.map((item, index) => {
    const data = findDataItemBySlug(categoriesData, item);

    if (data) {
      const { parent } = data;

      const parentId = getParentId(
        array,
        index,
        rootCategoryId,
        categoriesData
      );

      return parent === parentId ? 'category' : null;
    }

    return null;
  });
};

export default mapSplatArray;
