/**
 * Filters the key-value pairs of an object based on the provided filter function and reduces them into a new object.
 * @param {Object} obj - The input object to filter and reduce.
 * @param {Function} filterFn - The filter function used to determine which key-value pairs to include.
 * @returns {Object} - A new object containing the filtered key-value pairs.
 */
export default function filterAndReduceObject(obj, filterFn) {
  return Object.entries(obj)
    .filter(filterFn)
    .reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
}
