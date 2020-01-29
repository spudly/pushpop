/**
 * Returns the last item in an iterable. Throws an error if there is no last
 * item.
 *
 * @see {@link lodash.last}
 *
 * @template ITEM
 * @param {ArrayLike.<ITEM>} items - the iterable containing the items
 * @returns {ITEM} - the last item.
 */
const lastValue = items => {
  if (items.length === 0) {
    throw new Error('empty');
  }
  return items[items.length - 1];
};

export default lastValue;
