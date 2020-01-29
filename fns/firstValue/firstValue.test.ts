import firstValue from './firstValue';

const createIterator = function*(input: Array<any>) {
  for (const value of input) {
    yield value;
  }
};

test('gets the first item of an iterable', () => {
  expect(firstValue([0, 1, 2])).toBe(0);
  expect(firstValue('abc')).toBe('a');
  expect(firstValue([0, 1, 2])).toBe(0);
});

test('throws if the given iterable is empty', () => {
  expect(() => firstValue([])).toThrow('empty');
  expect(() => firstValue('')).toThrow('empty');
  expect(() => firstValue(createIterator([]))).toThrow('empty');
});
