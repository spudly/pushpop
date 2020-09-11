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
  const chunks: Array<Array<ITEM>> = [];
  allItems.forEach((item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    const chunk = (chunks[chunkIndex] = chunks[chunkIndex] ?? []);
    chunk.push(item);
  });
  return chunks;
};

export default chunk;
