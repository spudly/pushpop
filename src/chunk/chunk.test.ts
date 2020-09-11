import chunk from './chunk';

test('divides array into chunks', () => {
  expect([...chunk(3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])]).toStrictEqual([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9],
  ]);
});
