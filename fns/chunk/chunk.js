/**
 * Divides an iterable into multiple arrays of a specified length.
 *
 * @see {@link lodash.chunk}
 *
 * @template {any} ITEM
 * @param {number} chunkSize - the size of each chunk
 * @param {Iterable.<ITEM>} items - the source iterable of items
 * @returns {Iterable.<Array.<ITEM>>} - an array of item arrays
 */
const chunk = function*(chunkSize, items) {
  let chunk = [];
  for (const item of items) {
    chunk.push(item);
    if (chunk.length === chunkSize) {
      yield chunk;
      chunk = [];
    }
  }
  yield chunk;
};

export default chunk;
