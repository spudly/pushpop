/**
 * Divides an array into multiple arrays of a specified length.
 *
 * @param chunkSize the size of each chunk
 * @param items the source array of items
 * @returns an array of item arrays
 */
const chunk = <ITEM>(
  chunkSize: number,
  allItems: Array<ITEM>,
): Array<Array<ITEM>> => {
  const chunks = [];
  let items = [];
  for (const item of allItems) {
    items.push(item);
    if (items.length === chunkSize) {
      chunks.push(items);
      items = [];
    }
  }
  if (items.length) {
    chunks.push(items);
  }
  return chunks;
};

export default chunk;
