/**
 * Returns a new set of all the items from iterable `a` that are not in
 * iterable `b`.
 *
 * @see {@link lodash.difference}
 *
 * @template ITEM
 * @param {Iterable.<ITEM>} a The first set
 * @param {Iterable.<ITEM>} b The second set
 * @returns {Set.<ITEM>} A set of all items included in set `a` but not included in set `b`
 */
const difference = (a, b) => {
  const setB = new Set(b);
  const resultSet = new Set();
  for (const item of a) {
    if (!setB.has(item)) {
      resultSet.add(item);
    }
  }
  return resultSet;
};

export default difference;
