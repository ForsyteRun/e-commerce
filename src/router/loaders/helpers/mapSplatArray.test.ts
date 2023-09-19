import { ICategoryData } from 'types';
import mapSplatArray from './mapSplatArray';
import {
  fakeCategoryData,
  fakeRootId,
  fakeSplatArray,
} from './__stubs__/fakeData.stub';

describe('Testing mapSplatArray', () => {
  let array: string[];
  let data: ICategoryData[];
  let result: ('category' | null)[];

  beforeEach(() => {
    array = [...fakeSplatArray];
    data = [...fakeCategoryData];
    result = ['category', 'category', 'category'];
  });

  it('Should return an array with all elements equal "category"', () => {
    expect(mapSplatArray(array, data, fakeRootId)).toStrictEqual(result);
  });

  it('Should return an array with elements equal "category", except last = "null"', () => {
    array[array.length - 1] = 'prod';
    result[result.length - 1] = null;
    expect(mapSplatArray(array, data, fakeRootId)).toStrictEqual(result);
  });

  it('Should return an array with all "null" elements', () => {
    array = ['7', '77', '777'];
    result = [null, null, null];
    expect(mapSplatArray(array, data, fakeRootId)).toStrictEqual(result);
  });

  it('Should return an empty array', () => {
    array = [];
    expect(mapSplatArray(array, data, fakeRootId)).toStrictEqual([]);
  });
});
