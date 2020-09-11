/**
 * Returns true if the given value is not null or undefined.
 *
 * @param value - The value to test.
 * @returns True if the value is not null or undefined, false otherwise.
 */
const isNotNil = <T>(value: T): value is NonNullable<T> => value != null;

export default isNotNil;
