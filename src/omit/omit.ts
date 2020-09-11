/**
 * Returns a new copy of `object` with the specified keys omitted.
 *
 * @param blacklist - an array of the keys to omit
 * @param object - the object to omit keys from
 * @returns - a copy of object without the named keys
 */
const omit = <OBJ extends {}, KEYS extends Array<keyof OBJ>>(
  blacklist: KEYS,
  object: OBJ,
): Omit<OBJ, KEYS[number]> => {
  const o: Partial<OBJ> = {};
  for (const key in object) {
    if (!blacklist.includes(key)) {
      o[key] = object[key];
    }
  }
  return o as Omit<OBJ, KEYS[number]>;
};

export default omit;
