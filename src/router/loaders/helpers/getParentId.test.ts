import getParentId from './getParentId';
import {
  fakeCategoryData,
  fakeRootId,
  fakeSplatArray,
} from './__stubs__/fakeData.stub';

describe('Testing getParentId', () => {
  const data = [...fakeCategoryData];
  const array = [...fakeSplatArray];

  it('Should return root category id', () => {
    const index = 0;
    expect(getParentId(array, index, fakeRootId, data)).toBe(fakeRootId);
  });

  it('Should return "1", as a previous id', () => {
    const index = 2;
    expect(getParentId(array, index, fakeRootId, data)).toBe(array[index - 1]);
  });

  it('Should return "undefined" as a previous id', () => {
    array[0] = '777';
    const index = 1;
    expect(getParentId(array, index, fakeRootId, data)).toBeUndefined();
  });
});
