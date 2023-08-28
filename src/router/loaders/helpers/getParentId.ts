import { findDataItemBySlug } from 'helpers';
import { ICategoryData } from 'types';

const getParentId = (
  array: string[],
  index: number,
  rootCategoryId: string,
  categoriesData: ICategoryData[]
): string | undefined => {
  if (index) {
    const prevCategorySlug = array[index - 1];
    const prevCategoryData = findDataItemBySlug(
      categoriesData,
      prevCategorySlug
    );
    return prevCategoryData?.id;
  }

  return rootCategoryId;
};

export default getParentId;
