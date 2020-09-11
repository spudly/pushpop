/**
 * Returns a new set of all the items from iterable `a` that are not in
 * iterable `b`.
 *
 * @param a The first set
 * @param b The second set
 * @returns A set of all items included in set `a` but not included in set `b`
 */
const difference = <ITEM>(
  a: Array<ITEM> | Set<ITEM>,
  b: Array<ITEM> | Set<ITEM>,
): Set<ITEM> => {
  const setB = new Set<ITEM>(b);
  const resultSet = new Set<ITEM>();
  for (const item of a) {
    if (!setB.has(item)) {
      resultSet.add(item);
    }
  }
  return resultSet;
};

export default difference;
