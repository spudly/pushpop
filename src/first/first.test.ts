import first from './first';

test('gets the first item of an array', () => {
  expect(first([0, 1, 2])).toBe(0);
});

test('throws if the given array is empty', () => {
  expect(() => first([])).toThrow('empty');
});
