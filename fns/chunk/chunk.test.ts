import chunk from './chunk';

test('divides array into chunks', () => {
  expect([...chunk(3, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])]).toStrictEqual([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9],
  ]);
});

test('divides string into chunks', () => {
  expect([...chunk(3, '0123456789')]).toStrictEqual([
    ['0', '1', '2'],
    ['3', '4', '5'],
    ['6', '7', '8'],
    ['9'],
  ]);
});

test('streams an infinite iterable into chunks', () => {
  const toInfinityAndBeyond = function*() {
    for (let i = 0; true; i++) {
      yield i;
    }
  };
  const chunks = chunk(3, toInfinityAndBeyond());
  const iter = chunks[Symbol.iterator]();
  expect(iter.next().value).toStrictEqual([0, 1, 2]);
  expect(iter.next().value).toStrictEqual([3, 4, 5]);
  expect(iter.next().value).toStrictEqual([6, 7, 8]);
  expect(iter.next().value).toStrictEqual([9, 10, 11]);
});
