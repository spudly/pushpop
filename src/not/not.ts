/**
 * Given a function, returns a new function that is identical, except with the
 * return value negated.
 *
 * @param fn - A function
 * @returns The same function, but with the return value negated.
 */
const not = <ARGS extends Array<any>>(fn: (...args: ARGS) => any) => (
  ...args: ARGS
) => !fn(...args);

export default not;
