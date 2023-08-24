import { Attribute } from '@commercetools/platform-sdk';
import { capitalizeAll } from 'helpers/capitalize';
import { IAttributes } from 'types';
import isCorrectAttributeType from './isCorrectAttributeType';

const transformProductAttributes = (
  attributes: Attribute[]
): IAttributes | undefined => {
  const transformedAttributes: IAttributes = {};
  attributes.forEach((attribute) => {
    if (isCorrectAttributeType(attribute.value)) {
      const capitalizedName = capitalizeAll(attribute.name);
      transformedAttributes[capitalizedName] = attribute.value;
    }
  });

  if (!Object.keys(transformedAttributes).length) {
    return undefined;
  }

  return transformedAttributes;
};

export default transformProductAttributes;
