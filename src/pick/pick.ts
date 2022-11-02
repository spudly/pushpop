/**
 * Returns a function that accepts a source object and returns a new object with
 * only the specified keys from the source.
 *
 * @param keys - An array of keys to include in the new object
 * @returns A function that returns a new object with only the specified keys
 */
const pick = <SOURCE extends {}, KEYS extends keyof SOURCE>(
  keys: Array<KEYS>,
  source: SOURCE,
): Pick<SOURCE, KEYS> =>
  keys.reduce((prev, key) => ({...prev, [key]: source[key]}), {}) as Pick<
    SOURCE,
    KEYS
  >;

export default pick;
