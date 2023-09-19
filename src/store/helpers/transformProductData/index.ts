import { ProductProjection } from '@commercetools/platform-sdk';
import { IProductData } from 'types';
import localizedStringToString from 'helpers/localizedStringToString';
import transformPrice from './transformPrice';
import transformProductAttributes from './transformProductAttributes';

const transformProductData = (data: ProductProjection): IProductData => {
  const localizeString = localizedStringToString('en-US');
  const {
    id,
    name,
    categories,
    slug,
    masterVariant,
    description,
    metaTitle,
    metaDescription,
  } = data;
  const { sku, prices, attributes, images } = masterVariant;

  const transformedData: IProductData = {
    id,
    name: localizeString(name),
    categories: categories.map((category) => category.id),
    slug: localizeString(slug),
  };

  if (description) {
    transformedData.description = localizeString(description);
  }

  if (metaTitle) {
    transformedData.metaTitle = localizeString(metaTitle);
  }

  if (metaDescription) {
    transformedData.metaDescription = localizeString(metaDescription);
  }

  if (sku) {
    transformedData.sku = sku;
  }

  if (prices) {
    transformedData.price = transformPrice(prices[0]);
  }

  if (attributes) {
    transformedData.attributes = transformProductAttributes(attributes);
  }

  if (images) {
    transformedData.images = images.map((image) => image.url);
  }

  return transformedData;
};

export default transformProductData;
