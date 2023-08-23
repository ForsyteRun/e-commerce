import { AttributeValue } from 'types';

const isCorrectAttributeType = (attr: unknown): attr is AttributeValue => {
  const isNumber = typeof attr === 'number';
  const isBoolean = typeof attr === 'boolean';
  const isString = typeof attr === 'string';
  return isNumber || isBoolean || isString;
};

export default isCorrectAttributeType;
