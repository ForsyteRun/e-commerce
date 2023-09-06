import { ICategoryData } from 'types';

export const fakeCategoryData: ICategoryData[] = [
  {
    id: '1',
    name: '1',
    slug: '1',
    orderHint: 1,
    parent: 'root',
  },
  {
    id: '2',
    name: '2',
    slug: '2',
    orderHint: 2,
    parent: '1',
  },
  {
    id: '3',
    name: '3',
    slug: '3',
    orderHint: 2,
    parent: '2',
  },
];

export const fakeRootId = 'root';

export const fakeSplatArray = ['1', '2', '3'];
