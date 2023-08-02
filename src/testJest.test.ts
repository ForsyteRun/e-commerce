import testJest from './testJest';

test('test', () => {
  const res = testJest(1, 2);
  expect(res).toBe(3);
});
