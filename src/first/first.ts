/**
 * Returns the first item in an array. Throws if empty.
 *
 * @param items - the iterable containing the items
 * @returns the first item.
 */
const first = <ITEM>(items: Array<ITEM>): ITEM => {
  if (items.length === 0) {
    throw new Error('empty');
  }
  return items[0];
};

export default first;
