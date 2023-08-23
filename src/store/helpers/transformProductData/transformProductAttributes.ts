import { Attribute } from '@commercetools/platform-sdk';
import { capitalizeAll } from 'helpers/capitalize';
import { IAttributes } from 'types';
import isCorrectAttributeType from './isCorrectAttributeType';

const transformProductAttributes = (attributes: Attribute[]): IAttributes => {
  const transformedAttributes: IAttributes = {};
  attributes.forEach((attribute) => {
    if (isCorrectAttributeType(attribute.value)) {
      const capitalizedName = capitalizeAll(attribute.name);
      transformedAttributes[capitalizedName] = attribute.value;
    }
  });
  return transformedAttributes;
};

export default transformProductAttributes;
