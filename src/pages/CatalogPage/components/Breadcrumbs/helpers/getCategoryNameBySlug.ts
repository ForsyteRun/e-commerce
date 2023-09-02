import store from 'store';

const getCategoryNameBySlug = (slug: string) => {
  const { getState } = store;
  const { data } = getState().categoriesSlice;
  return data?.find((cat) => cat.slug === slug)?.name;
};

export default getCategoryNameBySlug;
