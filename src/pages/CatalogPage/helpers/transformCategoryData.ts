import { Category } from '@commercetools/platform-sdk';
import localizedStringToString from 'helpers/localizedStringToString';
import { ICategoryData } from 'types';

const transformCategoryData = (data: Category): ICategoryData => {
  const localizeString = localizedStringToString('en-US');
  const {
    id,
    name,
    slug,
    orderHint,
    key,
    description,
    metaTitle,
    metaDescription,
  } = data;

  const transformedData: ICategoryData = {
    id,
    name: localizeString(name),
    slug: localizeString(slug),
    orderHint: +orderHint,
  };

  if (key) {
    transformedData.key = key;
  }

  if (description) {
    transformedData.description = localizeString(description);
  }

  if (metaTitle) {
    transformedData.metaTitle = localizeString(metaTitle);
  }

  if (metaDescription) {
    transformedData.metaDescription = localizeString(metaDescription);
  }

  return transformedData;
};

export default transformCategoryData;
