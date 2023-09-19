import store from 'store';

export const getCategoriesState = () => {
  const { getState } = store;
  return getState().categoriesSlice.data;
};

export const getCategorySlugById = (id: string): string | undefined => {
  const categories = getCategoriesState();
  return categories?.find((cat) => cat.id === id)?.slug;
};

export const getParentCategorySlug = (slug: string): string | undefined => {
  const categories = getCategoriesState();
  const parentId = categories?.find((cat) => cat.slug === slug)?.parent;

  return parentId ? getCategorySlugById(parentId) : undefined;
};

export const generateCategoryPath = (slug: string): string => {
  const pathArray = [slug];

  const collectPaths = (currentSlug: string): void => {
    const parentSlug = getParentCategorySlug(currentSlug);

    if (parentSlug) {
      pathArray.unshift(parentSlug);
      return collectPaths(parentSlug);
    }

    return undefined;
  };

  collectPaths(slug);

  return pathArray.join('/');
};

export const generateProductPath = (
  slug: string,
  parentCategoryId: string
): string => {
  const parentCategorySlug = getCategorySlugById(parentCategoryId);

  if (parentCategorySlug) {
    const categoryPath = generateCategoryPath(parentCategorySlug);
    return `${categoryPath}/${slug}`;
  }

  return `/${slug}`;
};
