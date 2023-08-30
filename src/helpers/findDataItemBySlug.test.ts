import findDataItemBySlug from './findDataItemBySlug';

describe('Testing findDataItemBySlug', () => {
  const data = [
    {
      id: '1',
      name: '1',
      slug: '1',
      orderHint: 1,
    },
    {
      id: '2',
      name: '2',
      slug: '2',
      orderHint: 2,
    },
    {
      id: '3',
      name: '3',
      slug: '3',
      orderHint: 2,
    },
  ];

  it('Should return correct item', () => {
    const slug1 = '1';
    const slug2 = '2';

    expect(findDataItemBySlug(data, slug1)).toStrictEqual(data[0]);
    expect(findDataItemBySlug(data, slug2)).toStrictEqual(data[1]);
  });

  it('Should return "undefined" on wrong slug', () => {
    const slug = '777';
    expect(findDataItemBySlug(data, slug)).toBeUndefined();
  });
});
