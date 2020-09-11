import last from './last';

test('gets the last item of an array', () => {
  expect(last([0, 1, 2])).toBe(2);
});

test('throws if the given array or array-like object is empty', () => {
  expect(() => last([])).toThrow('empty');
});
