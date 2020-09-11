import unique from './unique';

test('returns the unique items from an array', () => {
  expect(unique([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8, 9])).toStrictEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ]);
});
