/**
 * Returns the unique items from an array.
 *
 * @param list - An array of items
 * @returns An array of unique items from `list`
 */
const unique = <ITEM extends any, LIST extends Array<ITEM>>(list: LIST): LIST =>
  [...new Set(list)] as LIST;

export default unique;
