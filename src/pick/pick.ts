/**
 * Returns a function that accepts a source object and returns a new object with
 * only the specified keys from the source.
 *
 * @param keys - An array of keys to include in the new object
 * @returns A function that returns a new object with only the specified keys
 */
const pick = <K extends string | number | symbol>(keys: Array<K>) => <
  SOURCE extends Record<K, any>
>(
  source: SOURCE,
): Pick<SOURCE, K> =>
  keys.reduce((prev, key) => ({...prev, [key]: source[key]}), {}) as Pick<
    SOURCE,
    K
  >;

export default pick;
