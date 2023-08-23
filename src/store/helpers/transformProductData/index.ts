import { ProductProjection } from '@commercetools/platform-sdk';
import { IProductData } from 'types';
import transformPrice from './transformPrice';
import transformProductAttributes from './transformProductAttributes';

const transformProductData = (data: ProductProjection) => {
  const language = 'en-US';
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
    name: name[language],
    categories: categories.map((category) => category.id),
    slug: slug[language],
  };

  if (description) {
    transformedData.description = description[language];
  }

  if (metaTitle) {
    transformedData.metaTitle = metaTitle[language];
  }

  if (metaDescription) {
    transformedData.metaDescription = metaDescription[language];
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
