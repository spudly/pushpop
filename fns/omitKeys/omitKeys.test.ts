import omitKeys from './omitKeys';

test('omits specified keys from an object', () => {
  expect(
    omitKeys(['a', 'b', 'c'], {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
    }),
  ).toStrictEqual({d: 4, e: 5, f: 6});
});
