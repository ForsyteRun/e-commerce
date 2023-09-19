import { ICategoryData, IProductData } from 'types';

const findDataItemBySlug = <T extends IProductData | ICategoryData>(
  array: T[],
  slug: string | undefined
): T | undefined => array.find((item) => item.slug === slug);

export default findDataItemBySlug;
