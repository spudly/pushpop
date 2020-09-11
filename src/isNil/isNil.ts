/**
 * Returns true if the given value is null or undefined.
 *
 * @param val - The value to test
 * @returns true if null or undefined, false otherwise.
 */
const isNil = <T>(val: T | null | undefined): val is null | undefined =>
  val == null;

export default isNil;
