/**
 * Returns a new copy of `object` with the specified keys omitted.
 *
 * @template {Object} OBJ
 * @template {keyof OBJ} KEY
 * @param {Array.<KEY>} blacklist - an array of the keys to omit
 * @param {OBJ} object - the object to omit keys from
 * @returns {Omit.<OBJ, KEY>} - a copy of object without the named keys
 */
const omitKeys = (blacklist, object) => {
  /** @type Partial.<OBJ> */
  const o = {};
  for (const key in object) {
    // @ts-ignore
    if (!blacklist.includes(key)) {
      o[key] = object[key];
    }
  }
  // @ts-ignore
  return o;
};

export default omitKeys;
