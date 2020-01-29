import difference from './difference';

test('returns the diff of two sets', () => {
  expect(difference(new Set([1, 2, 3]), new Set([2, 3, 4]))).toStrictEqual(
    new Set([1]),
  );
});

test('returns the diff of two arrays', () => {
  expect(difference([1, 2, 3, 1, 2, 3], [2, 3, 4, 2, 3, 4])).toStrictEqual(
    new Set([1]),
  );
});
