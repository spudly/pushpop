import pick from './pick';

test('picks the named properties from an object', () => {
  expect(pick(['a', 'b'])({a: 1, b: 2, c: 3, d: 4})).toStrictEqual({
    a: 1,
    b: 2,
  });
});
