import { PathNames } from 'types';
import store from 'store';
import getCategoryNameBySlug from './getCategoryNameBySlug';

const mapSlugs = (slugs: string[]) => {
  const { getState } = store;
  const { data: product } = getState().singleProductDataSlice;

  return slugs.map((slug, index, arr) => {
    if (!index) {
      return {
        to: PathNames.index,
        name: 'Home',
      };
    }

    if (index === 1) {
      return {
        to: PathNames.catalog,
        name: 'Catalog',
      };
    }

    const categoryIndex = 2;
    const sliceEndIndex = arr.indexOf(slug) + 1;
    const slicedSlugs = arr.slice(categoryIndex, sliceEndIndex);
    const to = slicedSlugs.join('/');

    if (index === arr.length - 1) {
      const categoryName = getCategoryNameBySlug(slug);
      const productName = product?.name;
      return {
        to,
        name: categoryName || productName || '',
      };
    }

    const categoryName = getCategoryNameBySlug(slug);
    return {
      to,
      name: categoryName || '',
    };
  });
};

export default mapSlugs;
