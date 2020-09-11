import isNotNil from './isNotNil';

test('returns false if the value is null | undefined', () => {
  expect(isNotNil(null)).toBe(false);
  expect(isNotNil(undefined)).toBe(false);
});

test('returns true if the value is not null or undefined', () => {
  expect(isNotNil(1)).toBe(true);
  expect(isNotNil(new Date())).toBe(true);
  expect(isNotNil(false)).toBe(true);
  expect(isNotNil(Number.NaN)).toBe(true);
});
