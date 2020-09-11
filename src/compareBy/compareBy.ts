type Comparable = number | string | Date;

/**
 * Creates a comparator (for sorting) that compares two values by the results of
 * a function that is applied to each value.
 *
 * @param fn - A function
 * @returns A comparator
 */
const compareBy = <VALUE, RESULT extends Comparable>(
  fn: (value: VALUE) => RESULT,
) => (a: VALUE, b: VALUE): -1 | 0 | 1 => {
  const $a = fn(a);
  const $b = fn(b);

  return $a < $b ? -1 : $a > $b ? 1 : 0;
};

export default compareBy;
