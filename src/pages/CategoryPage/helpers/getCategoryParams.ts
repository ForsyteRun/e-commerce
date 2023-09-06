import { Params } from 'react-router-dom';
import store from 'store';

export const getCategoryIdBySlug = (slug: string): string | undefined => {
  const { data } = store.getState().categoriesSlice;
  return data?.find((cat) => cat.slug === slug)?.id;
};

export const getCategoryIdByParams = ({
  category,
  '*': splat,
}: Params<string>): string | undefined => {
  if (splat) {
    const formattedSplat = splat.replace(/\/*$/, '');
    const slug = formattedSplat.slice(formattedSplat.lastIndexOf('/') + 1);
    const id = getCategoryIdBySlug(slug);
    return id;
  }
  if (category) {
    const id = getCategoryIdBySlug(category);
    return id;
  }
  return '';
};
