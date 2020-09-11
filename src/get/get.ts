/**
 * Given a key, creates a new function that accepts an object and returns the
 * value with the specified key.
 *
 * @returns a function that
 */
const get = <KEY extends string | number | symbol>(key: KEY) => <
  OBJ extends Record<KEY, any>
>(
  obj: OBJ,
): OBJ[KEY] => obj[key];

export default get;
