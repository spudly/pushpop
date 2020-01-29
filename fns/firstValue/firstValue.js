/**
 * Returns the first item in an iterable. Throws an error if there is no first
 * item.
 *
 * @see {@link lodash.first}
 * @see {@link lodash.head}
 *
 * @template ITEM
 * @param {Iterable.<ITEM>} items - the iterable containing the items
 * @returns {ITEM} - the first item.
 */
const first = items => {
  for (const item of items) {
    return item;
  }
  throw new Error('empty');
};

export default first;
