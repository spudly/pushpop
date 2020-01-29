import lastValue from './lastValue';

test('gets the last item of an array or array-like object', () => {
  expect(lastValue([0, 1, 2])).toBe(2);
  expect(lastValue('abc')).toBe('c');
  expect(lastValue({length: 3, 0: 0, 1: 1, 2: 2})).toBe(2);
});

test('throws if the given array or array-like object is empty', () => {
  expect(() => lastValue([])).toThrow('empty');
  expect(() => lastValue('')).toThrow('empty');
  expect(() => lastValue({length: 0})).toThrow('empty');
});
