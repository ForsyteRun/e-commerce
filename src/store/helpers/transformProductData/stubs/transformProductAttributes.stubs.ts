import { Attribute } from '@commercetools/platform-sdk';
import { IAttributes } from 'types';

export const correctAttributesTest: Attribute[] = [
  {
    name: 'attr_one',
    value: 'string',
  },
  {
    name: 'attr_two',
    value: 777,
  },
  {
    name: 'attr_three',
    value: false,
  },
];

export const correctAttributesTestResult: IAttributes = {
  'Attr One': 'string',
  'Attr Two': 777,
  'Attr Three': false,
};

export const undefinedAttributesTest: Attribute[] = [
  {
    name: 'null_attr',
    value: null,
  },
  {
    name: 'arr_attr',
    value: [],
  },
  {
    name: 'undef_attr',
    value: undefined,
  },
];

export const notOnlyCorrectAttributesTest: Attribute[] = [
  {
    name: 'str_attr',
    value: 'string',
  },
  {
    name: 'obj_attr',
    value: {},
  },
  {
    name: 'arr_attr',
    value: [],
  },
  {
    name: 'null_attr',
    value: null,
  },
  {
    name: 'undef_attr',
    value: undefined,
  },
  {
    name: 'nan_attr',
    value: NaN,
  },
];

export const notOnlyCorrectAttributesTestResult: IAttributes = {
  'Str Attr': 'string',
};
