/**
 * Returns the last item in an iterable. Throws an error if there is no last
 * item.
 *
 * @param items - the iterable containing the items
 * @returns the last item.
 */
const lastValue = <ITEM>(items: Array<ITEM>): ITEM => {
  if (items.length === 0) {
    throw new Error('empty');
  }
  return items[items.length - 1];
};

export default lastValue;
